import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree, type RootState } from '@react-three/fiber';
import * as THREE from 'three';
import { useWindowSize } from 'usehooks-ts';
function ShaderPlane() {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { width, height } = useWindowSize();
  // uniforms
  const uniforms = useRef({
    time: { value: 0.0 },
    resolution: { value: new THREE.Vector2(width, height) },
  });

  // update time each frame
  useFrame(() => {
    if (materialRef.current) {
      uniforms.current.time.value += 0.005;
    }
  });

  useEffect(() => {
    if (materialRef.current) {
      uniforms.current.resolution.value.set(width, height);
    }
  }, [width, height]);

  const vertexShader = `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    #define TWO_PI 6.2831853072
    #define PI 3.14159265359

    precision highp float;
    uniform vec2 resolution;
    uniform float time;

    float random (in float x) {
        return fract(sin(x)*1e4);
    }
    float random (vec2 st) {
        return fract(sin(dot(st.xy,
                             vec2(12.9898,78.233)))*
            43758.5453123);
    }

    void main(void) {
      vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
      
      vec2 fMosaicScal = vec2(4.0, 2.0);
      vec2 vScreenSize = vec2(256.0,256.0);
      uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
      uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);       
          
      float t = time*0.06+random(uv.x)*0.4;
      float lineWidth = 0.0008;

      vec3 color = vec3(0.0);
      for(int j = 0; j < 3; j++){
        for(int i=0; i < 5; i++){
          color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*1.0 - length(uv));        
        }
      }

      gl_FragColor = vec4(color[2], color[1], color[0], 1.0);
    }
  `;

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={uniforms.current}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}
export default function Background() {
  const onCreated = (state: RootState) => {
    const canvas = state.gl.domElement;
    const container = document.getElementById('root');

    if (state.events.connect && container) {
      state.events.connect(container);
      state.setEvents({
        compute: (event, state) => {
          const rect = canvas.getBoundingClientRect();
          const inside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

          if (!inside) return; // skip if cursor not inside canvas

          state.pointer.set(
            ((event.clientX - rect.left) / rect.width) * 2 - 1,
            -((event.clientY - rect.top) / rect.height) * 2 + 1
          );
          state.raycaster.setFromCamera(state.pointer, state.camera);
        },
      });
    }
  };
  return (
    <Canvas
      aria-hidden="true"
      role="presentation"
      tabIndex={-1}
      onCreated={onCreated}
      orthographic
      camera={{ position: [0, 0, 1], zoom: 1 }}
      dpr={1}
    >
      <ShaderPlane />
    </Canvas>
  );
}
