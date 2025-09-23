import SectionHeader from '../components/SectionHeader';
import { ArrowUpRight } from 'lucide-react';

const currentProject = {
  title: 'create-react-creative',
  timeline: 'Sep 2025 — Present',
  status: 'In Progress',
  description:
    'Open-source scaffolder CLI for React creative projects. Shipping type-safe templates, zero-config tooling and modern technologies.',
  focuses: [
    "Templated React + Vite starters with the community's best creative tools by choice",
    '(Dev) Automated CI/CD testing and semantic-release pipeline via GitHub Actions',
  ],
  href: 'https://github.com/tim-ming/create-react-creative',
};

export default function NowSection() {
  return (
    <section id="now">
      <SectionHeader title="Currently Building" content="A full-fledged launchpad for creative front-end work" />
      <article className="group card relative space-y-3 p-5 text-sm text-gray-300">
        <header className="flex flex-wrap items-center gap-2">
          <a
            href={currentProject.href}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-outline group flex items-center gap-2 rounded-sm"
            aria-label={`${currentProject.title} (opens in GitHub in a new tab)`}
          >
            <span className="absolute inset-0 rounded-sm" aria-hidden="true" />
            <h3 className="animated-text text-xl leading-none font-semibold">{currentProject.title}</h3>
            <ArrowUpRight className="animated-arrow h-4 w-4" aria-hidden />
          </a>
          {/* <span className="text-xs tracking-[0.3em] text-gray-500 uppercase">{currentProject.status}</span> */}
        </header>
        <p className="font-mono text-xs text-gray-500">{currentProject.timeline}</p>
        <p className="mb-4 text-sm text-gray-400">{currentProject.description}</p>
        <ul className="space-y-2 text-sm text-gray-300">
          {currentProject.focuses.map((focus) => (
            <li key={focus} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" aria-hidden="true" />
              <span className="leading-tight text-gray-300">{focus}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
