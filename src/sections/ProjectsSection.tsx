import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { projects } from '../data/projects';
import SectionHeader from '../components/SectionHeader';
import { useScreenLargerThan, useScreenSize } from '@/hooks';

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 4);
  const isSmUp = useScreenLargerThan('sm');
  return (
    <section id="projects" data-section>
      <SectionHeader title="Projects" content="Some things I worked on." />
      <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-4 md:gap-6">
        {featuredProjects.map((project) => (
          <li
            key={project.id}
            className={`${isSmUp ? 'group card' : ''} relative flex flex-col gap-3 text-sm text-gray-300 sm:p-4`}
          >
            {project.image && (project.image.default || project.image.web) && (
              <div className="relative aspect-video h-32 overflow-hidden sm:h-auto">
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
                    className="h-full rounded-md border border-white/10 bg-black/20 object-cover sm:h-auto sm:border-white/5"
                  />
                </picture>
              </div>
            )}
            <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-gray-500">
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className={`focus-outline group flex items-center gap-1 rounded-md text-sm font-medium text-gray-200`}
                aria-label={`${project.title} (opens in ${project.tooltip ?? 'link'} in a new tab)`}
              >
                <span className="absolute inset-0 hidden rounded-md sm:block" aria-hidden="true" />
                <h3 className="animated-text text-lg leading-tight font-medium">{project.title}</h3>
                <ArrowUpRight className="animated-arrow h-3 w-3" />
              </a>
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
              <div className="flex flex-wrap gap-1 py-1 text-xs text-gray-400">
                {project.skills.map((skill) => (
                  <span key={skill} className="badge text-xs text-blue-200/90">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center">
        <Link
          to="/projects"
          className="focus-outline group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
        >
          <span className="relative font-mono">View Project Archive</span>
          <ArrowRight className="in-visible:translate-x-1 h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
