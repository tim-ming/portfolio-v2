import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const projects = [
  {
    id: '01',
    role: 'Open Source Tooling',
    timeline: 'Present',
    title: 'create-react-creative',
    description:
      'Open-source scaffolder CLI for React creative projects. Shipping type-safe templates, zero-config tooling and modern technologies.',
    descriptionShort: 'TypeScript npm scaffolder with automated testing and CI/CD.',
    skills: ['TypeScript', 'Node.js', 'npm', 'GitHub Actions', 'Vitest'],
    tooltip: 'GitHub',
    href: 'https://github.com/tim-ming/create-react-creative',
    image: {
      default: 'create-react-creative.png',
      web: 'create-react-creative.webp',
    },
  },
  {
    id: '02',
    role: 'Frontend Development',
    timeline: '2025',
    title: 'Portfolio Website',
    description:
      'Interactive portfolio site exploring creative coding techniques with modern tools like GSAP and three.js.',
    descriptionShort: 'Accessible React and Tailwind portfolio site with polished motion.',
    skills: ['React', 'TypeScript', 'Tailwind', 'GSAP', 'Three.js'],
    tooltip: 'Website',
    href: 'https://timming.dev/',
    image: {
      default: 'pfv1.jpg',
      web: 'pfv1.webp',
    },
  },
  {
    id: '03',
    role: 'Android Development',
    timeline: '2025',
    title: 'NutriTrack',
    description:
      'GenAI-powered nutrition analysis Android app using Kotlin, MVVM, Room, Retrofit, and Gemini to deliver personalized dietary insights.',
    descriptionShort: 'Android nutrition app with MVVM, Room, Retrofit, and Gemini insights.',
    skills: ['Kotlin', 'MVVM', 'Room', 'Retrofit', 'Gemini API'],
    tooltip: 'Github',
    href: 'https://github.com/tim-ming/NutriTrack',
    image: {
      default: 'nutritrack.jpg',
      web: 'nutritrack.webp',
    },
  },
  {
    id: '04',
    role: 'Mobile Development & Design',
    timeline: '2024',
    title: 'Final Year Project',
    description:
      'Team-built CBT mobile app in React Native & FastAPI & multimodal ML to detect depressive symptoms and provide therapist-ready insights.',
    descriptionShort: 'React Native and FastAPI CBT app with multimodal ML insights.',
    skills: ['React Native', 'FastAPI', 'Expo', 'Zustand'],
    tooltip: 'GitHub',
    href: 'https://github.com/tim-ming/fyp',
    image: {
      default: 'fyp.jpg',
      web: 'fyp.webp',
    },
  },
  {
    id: '05',
    role: 'Software Development',
    timeline: '2023',
    title: 'Tetris',
    description:
      'Functional Tetris clone implemented with RxJS to highlight reactive streams and advanced TypeScript functional programming patterns.',
    descriptionShort: 'RxJS-driven Tetris showcasing functional programming in TypeScript.',
    skills: ['RxJS', 'TypeScript', 'Functional Programming'],
    tooltip: 'Website',
    href: 'https://rxtetris.timming.dev/',
    image: {
      default: 'tetris.png',
      web: 'tetris.webp',
    },
  },
  {
    id: '06',
    role: 'Frontend Development',
    timeline: '2023',
    title: 'Mock Forum',
    description:
      'A textbook example of a forum with pagination and filtering, powered by React, TanStack Query, Tailwind and Motion.',
    descriptionShort: 'Forum demo with pagination, filtering, and TanStack Query.',
    skills: ['React', 'TanStack Query', 'Tailwind CSS', 'Motion'],
    tooltip: 'Website',
    href: 'https://mock-forum.timming.dev/',
    image: {
      default: 'mock-forum.jpg',
      web: 'mock-forum.webp',
    },
  },
  {
    id: '07',
    role: 'Web Development',
    timeline: '2024',
    title: 'Meaningless',
    description:
      'Three.js powered gallery exploring AI-generated imagery with spatial storytelling and lightweight interactions.',
    descriptionShort: 'AI image gallery built with Three.js and React.',
    skills: ['React', 'Three.js', 'GSAP'],
    tooltip: 'Website',
    href: 'https://meaningless.timming.dev/',
    image: {
      default: 'meaningless.jpg',
      web: 'meaningless.webp',
    },
  },
  {
    id: '08',
    role: 'Creative Coding',
    timeline: '2023',
    title: 'Kuroneko',
    description:
      'Low-poly three.js micro world built with Svelte and Three.js, featuring custom-modeled assets and touch-friendly exploration.',
    descriptionShort: 'Three.js Svelte experience with original low-poly art assets.',
    skills: ['Three.js', 'Svelte', 'Threlte', 'Tailwind CSS', 'Blender'],
    tooltip: 'GitHub',
    href: 'https://github.com/tim-ming/kuroneko',
    image: {
      default: 'kuroneko.jpg',
      web: 'kuroneko.webp',
    },
  },
  {
    id: '09',
    role: 'Frontend Development',
    timeline: '2022',
    title: 'totally-twitter',
    description:
      'Partner-built Twitter clone that snapshots a single account feed, using Svelte, SCSS, and lazy-loaded routes.',
    descriptionShort: 'Svelte snapshot of a Twitter profile with lazy loading and SCSS styling.',
    skills: ['Svelte', 'SCSS', 'PostgresSQL'],
    tooltip: 'Website',
    href: 'https://kitano.koguma.net',
    image: {
      default: 'totally-twitter.png',
      web: 'totally-twitter.webp',
    },
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" data-section>
      <SectionHeader title="Projects" content="Some things I worked on." />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        {projects.map((project) => (
          <li key={project.id} className="group card relative flex flex-col gap-3 p-4 text-sm text-gray-300">
            {project.image && (project.image.default || project.image.web) && (
              <div className="relative aspect-video overflow-hidden rounded-md border border-white/5 bg-black/20">
                <picture>
                  {project.image.web && <source srcSet={`/projects/${project.image.web}`} type="image/webp" />}
                  <img
                    src={
                      project.image.default
                        ? `/projects/${project.image.default}`
                        : project.image.web
                          ? `/projects/${project.image.web}`
                          : undefined
                    }
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </picture>
              </div>
            )}
            <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-gray-500">
              <h3 className="text-lg leading-tight font-medium text-white">{project.title}</h3>
              {project.timeline && (
                <span
                  className={`font-mono text-xs ${project.timeline == 'Present' ? 'font-medium text-blue-300' : 'text-gray-500'}`}
                >
                  {project.timeline}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-400">{project.description}</p>
            {project.skills && project.skills.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-1 text-xs text-gray-400">
                {project.skills.map((skill) => (
                  <span key={skill} className="badge text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {project.href && (
              <div className="mt-auto flex">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-outline flex items-center gap-2 rounded-md p-1 text-sm font-medium text-white transition hover:text-gray-200 focus-visible:text-gray-200"
                  aria-label={`${project.title} (opens in ${project.tooltip ?? 'link'} in a new tab)`}
                >
                  <span className="absolute inset-0 rounded-md" aria-hidden="true" />
                  <span>Open {project.tooltip ?? 'Link'}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <span className="flex-1" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
