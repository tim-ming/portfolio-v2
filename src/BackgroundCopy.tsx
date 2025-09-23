import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  Sphere,
  MeshReflectorMaterial,
  MeshTransmissionMaterial,
  MeshRefractionMaterial,
} from '@react-three/drei';
import { Suspense, useRef, useMemo, useState, useCallback, useEffect, useLayoutEffect, use } from 'react';
import { Perf } from 'r3f-perf';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';
import { EffectComposer, Bloom, DepthOfField, Noise, Vignette } from '@react-three/postprocessing';
import { Leva, useControls } from 'leva';

const noise = new ImprovedNoise();

interface FloatingSphereProps {
  onImpact?: (time: number) => void;
}

function FloatingSphere({ onImpact }: FloatingSphereProps) {
  const ref = useRef<THREE.Mesh | null>(null);
  const velocity = useRef(0);
  const impacted = useRef(false);
  const startY = 4; // starting height above ground (ground plane at y = -1, sphere radius 1 => rest center y = 0)
  const gravity = -9.8 * 0.9; // tuned gravity

  // Initialize start position once
  useMemo(() => {
    if (ref.current) ref.current.position.y = startY;
  }, []);

  useFrame((state, dt) => {
    const mesh = ref.current;
    if (!mesh) return;
    if (!impacted.current) {
      velocity.current += gravity * dt;
      mesh.position.y += velocity.current * dt;
      if (mesh.position.y <= 0) {
        mesh.position.y = 0;
        impacted.current = true;
        velocity.current = 0;
        onImpact && onImpact(state.clock.getElapsedTime());
      }
    } else {
      // Optional subtle hover after impact
      // mesh.position.y = 0 + Math.sin(state.clock.getElapsedTime() * 1.5) * 0.03;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 64, 64]} position={[0, startY, 0]} name="FloatingSphere">
      {/* <meshStandardMaterial
        emissive="#ffffff"
        emissiveIntensity={1}
        color="white"
        roughness={0.35}
        metalness={0.15}
      /> */}
      <MeshTransmissionMaterial
        thickness={1}
        chromaticAberration={0}
        distortion={0.5}
        distortionScale={0.5}
        roughness={0.2}
      />
    </Sphere>
  );
}

interface ParticlesProps {
  count?: number;
  radius?: number; // horizontal spread radius from sphere center
  groundY?: number; // base y where particles start
  impactTime: number | null;
  riseDuration?: number; // seconds to reach full height
  cinematic?: boolean;
}

export function Particles({
  count = 1000,
  radius = 10,
  groundY = -1,
  impactTime,
  riseDuration = 10,
  cinematic = true,
}: ParticlesProps) {
  const mesh = useRef<THREE.InstancedMesh>(null!);

  // Precompute initial data
  const { positions, heights, delays, scales } = useMemo(() => {
    const pos: THREE.Vector3Tuple[] = [];
    const h = new Float32Array(count);
    const d = new Float32Array(count);
    const s = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * radius;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = groundY + (Math.random() * 0.02 - 0.01);

      pos.push([x, y, z]);
      h[i] = Math.random() * 1;
      d[i] = r / (radius * 2) + Math.random() * 0.02;
      s[i] = Math.random() * 1 + 0.5; // random scale between 0.5 and 1
    }
    return { positions: pos, heights: h, delays: d, scales: s };
  }, [count, radius, groundY]);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 20);

  useFrame((state, dt) => {
    if (!mesh.current || impactTime == null) return;

    const elapsed = state.clock.getElapsedTime() - impactTime;

    for (let i = 0; i < count; i++) {
      const base = positions[i];
      const delay = delays[i];
      if (elapsed < delay) continue;

      const localT = (elapsed - delay) / riseDuration;
      const clamped = Math.min(localT, 1);
      const progress = cinematic ? easeOutQuart(clamped) : clamped;

      // Update instance transform
      dummy.position.set(base[0], groundY + heights[i] * progress, base[2]);
      dummy.scale.setScalar(scales[i]);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }

    mesh.current.instanceMatrix.needsUpdate = true;

    // Subtle scene-wide rotation
    // if (elapsed > 0.5) mesh.current.rotation.y += 0.01 * dt;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 4, 4]} />
      <meshBasicMaterial color="#bbb" />
    </instancedMesh>
  );
}

// Generate a canvas-based dynamic roughness map that activates on impact.
// White = rough (diffuse/scattered), black = smooth (mirror-like).
function useRoughnessMap(
  impactTime: number | null,
  opts: {
    size?: number;
    speed?: number; // ring outward speed (px/sec)
    ringCount?: number; // number of rings
    ringSpacing?: number; // time between ring emissions (s)
    centerDecay?: number; // decay rate for turbulent center
    ringDecay?: number; // decay for rings
    maxTime?: number; // total active lifespan
  } = {}
) {
  const {
    size = 256,
    speed = 90,
    ringCount = 4,
    ringSpacing = 0.28,
    centerDecay = 2.3,
    ringDecay = 1.4,
    maxTime = 5,
  } = opts;

  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, size, size);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }, [size]);

  const ctx = useMemo(() => {
    return (texture.image as HTMLCanvasElement).getContext('2d', {
      willReadFrequently: true,
    });
  }, [texture]);

  useFrame((state) => {
    if (impactTime === null) return;
    const elapsed = state.clock.getElapsedTime() - impactTime;

    if (!ctx) return;
    if (elapsed < 0 || elapsed > maxTime) {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, size, size);
      texture.needsUpdate = true;
      return;
    }
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = '#050505'; // slight base roughness
    ctx.fillRect(0, 0, size, size);
    const center = size / 2;

    // Apply Perlin noise AFTER gradient
    const imageData = ctx.getImageData(0, 0, size, size);
    const data = imageData.data;
    const noiseScale = 0.05; // adjust for detail size
    const noiseStrength = 50; // adjust for intensity

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const i = (y * size + x) * 4;
        const n = noise.noise(x * noiseScale, y * noiseScale, elapsed * 0.3);
        data[i] = Math.min(255, data[i] + n * noiseStrength); // R
        data[i + 1] = Math.min(255, data[i + 1] + n * noiseStrength); // G
        data[i + 2] = Math.min(255, data[i + 2] + n * noiseStrength); // B
      }
    }

    console.log(imageData);
    ctx.putImageData(imageData, 0, 0);
    texture.needsUpdate = true;

    texture.needsUpdate = true;
  });

  return texture;
}

// Distortion map (red channel) for additional refraction wobble, optional
function useDistortionMap(
  impactTime: number | null,
  opts: {
    size?: number;
    speed?: number;
    ringCount?: number;
    ringSpacing?: number;
    thickness?: number;
    decay?: number;
    maxTime?: number;
  } = {}
) {
  const {
    size = 256,
    speed = 10,
    ringCount = 4,
    ringSpacing = 0.22,
    thickness = 12,
    decay = 1.3,
    maxTime = 500,
  } = opts;
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d', {
      willReadFrequently: true,
    });
    if (ctx) {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, size, size);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }, [size]);

  const ctx = useMemo(() => {
    return (texture.image as HTMLCanvasElement).getContext('2d', {
      willReadFrequently: true,
    });
  }, [texture]);

  useFrame((state) => {
    if (impactTime === null) return;
    const elapsed = state.clock.getElapsedTime() - impactTime;
    if (!ctx) return;
    if (elapsed < 0 || elapsed > maxTime) {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, size, size);
      texture.needsUpdate = true;
      return;
    }
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, size, size);
    const c = size / 2;
    for (let r = 0; r < ringCount; r++) {
      const t = elapsed - r * ringSpacing;
      if (t < 0) continue;
      const amp = Math.exp(-t * decay);
      if (amp < 0.02) continue;
      const radius = t * speed;
      if (radius > size * 0.85) continue;
      let inner = radius - thickness * 0.5;
      let outer = radius + thickness * 0.5;
      if (inner < 0) inner = 0;
      if (outer <= inner) outer = inner + 0.0001;
      const grad = ctx.createRadialGradient(c, c, inner, c, c, outer);
      grad.addColorStop(0, 'rgba(255,0,0,0)');
      grad.addColorStop(0.48, `rgba(255,0,0,${0.8 * amp})`);
      grad.addColorStop(0.5, `rgba(255,0,0,${1 * amp})`);
      grad.addColorStop(0.52, `rgba(255,0,0,${0.8 * amp})`);
      grad.addColorStop(1, 'rgba(255,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);
    }

    // Apply Perlin noise AFTER gradient
    const imageData = ctx.getImageData(0, 0, size, size);
    const data = imageData.data;
    const noiseScale = 0.05; // adjust for detail size
    const noiseStrength = 50; // adjust for intensity

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const i = (y * size + x) * 4;
        const n = noise.noise(x * noiseScale, y * noiseScale, elapsed * 0.3);
        data[i] = Math.min(255, data[i] + n * noiseStrength); // R
        data[i + 1] = Math.min(255, data[i + 1] + n * noiseStrength); // G
        data[i + 2] = Math.min(255, data[i + 2] + n * noiseStrength); // B
      }
    }

    console.log(imageData);
    ctx.putImageData(imageData, 0, 0);
    texture.needsUpdate = true;
  });
  return texture;
}

function ReflectiveFloor({ impactTime }: { impactTime: number | null }) {
  // const roughnessMap = useRoughnessMap(impactTime, {});
  // const distortionMap = useDistortionMap(impactTime, {});
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[40, 40]} />
      <MeshReflectorMaterial
        resolution={1024}
        // blur={[800, 100]}
        blur={[400, 50]}
        mixBlur={1}
        mixStrength={500}
        depthScale={1}
        minDepthThreshold={0.5}
        maxDepthThreshold={1.4}
        color="#111"
        metalness={0.5}
        roughness={0.99}
        // roughnessMap={roughnessMap}
        // distortion={impactTime ? 0.75 : 0}
        // distortionMap={distortionMap}
      />
    </mesh>
  );
}

const Effects = () => {
  // Leva control panel for postprocessing
  const {
    bloomIntensity,
    bloomThreshold,
    bloomSmoothing,
    vignetteOffset,
    vignetteDarkness,
    noiseOpacity,
    dofFocalDistance,
    dofFocalLength,
    dofFocusRange,
    dofBokehScale,
  } = useControls('Postprocessing', {
    bloomIntensity: { value: 1.5, min: 0, max: 5, step: 0.05 },
    bloomThreshold: { value: 0, min: 0, max: 1, step: 0.01 },
    bloomSmoothing: { value: 0.9, min: 0, max: 1, step: 0.01 },
    vignetteOffset: { value: 0.1, min: 0, max: 1, step: 0.01 },
    vignetteDarkness: { value: 0.8, min: 0, max: 3, step: 0.05 },
    noiseOpacity: { value: 0.1, min: 0, max: 1, step: 0.01 },
    dofFocalDistance: { value: 0.01, min: 0.001, max: 1, step: 0.001 },
    dofFocalLength: { value: 0.01, min: 0.001, max: 1, step: 0.001 },
    dofFocusRange: { value: 0.01, min: 0.001, max: 1, step: 0.001 },
    dofBokehScale: { value: 5, min: 0, max: 10, step: 0.1 },
  });

  return (
    <EffectComposer>
      {/* <Bloom
        luminanceThreshold={bloomThreshold}
        luminanceSmoothing={bloomSmoothing}
        intensity={bloomIntensity}
      /> */}

      <Bloom luminanceThreshold={0} luminanceSmoothing={0.8} intensity={5} />
      {/* <DepthOfField
        // focusDistance={dofFocalDistance}
        // focalLength={dofFocalLength}
        // focusRange={dofFocusRange}

        focusDistance={0.29}
        focalLength={0}
        focusRange={0.12}
        bokehScale={dofBokehScale}
      /> */}
      {/* <Noise opacity={noiseOpacity} /> */}
      <Noise opacity={0.15} />
      <Vignette eskil={false} offset={vignetteOffset} darkness={vignetteDarkness} />
    </EffectComposer>
  );
};

function Rig({ initialPosition }: { initialPosition: THREE.Vector3Tuple }) {
  const { camera, pointer } = useThree();
  const vec = new THREE.Vector3();

  useFrame((_, delta) => {
    const lerpSpeed = 5 * delta;
    camera.position.lerp(
      vec.set(initialPosition[0] + pointer.x * 2, initialPosition[1] + pointer.y * 1 + 1, initialPosition[2]),
      lerpSpeed
    );
    camera.lookAt(0, 0, 0);
  }, -1); // priority -1 runs before other frames like reflector

  return null;
}

export default function Background() {
  const [impactTime, setImpactTime] = useState<number | null>(null);

  const handleImpact = useCallback((t: number) => {
    setImpactTime((prev) => (prev == null ? t : prev));
  }, []);

  return (
    <Canvas dpr={[1, 1.5]} camera={{ fov: 50, near: 0.1, far: 50 }}>
      {/* <Perf className="left-0 top-0 !right-auto" /> */}
      <color attach="background" args={['#0c0c0c']} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[2, 5, 2]} intensity={1.7} />
      <Suspense fallback={null}>
        <FloatingSphere onImpact={handleImpact} />
        <Particles impactTime={impactTime} />
        <ReflectiveFloor impactTime={impactTime} />
      </Suspense>
      <Rig initialPosition={[0, -0.5, 15]} />
      <fog attach="fog" args={['#0c0c0c', 15, 25]} />
      <Effects />
      {/* <OrbitControls enableZoom={false} /> */}
      <Leva hidden />
    </Canvas>
  );
}
