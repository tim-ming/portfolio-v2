import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { projects } from '../data/projects';

export default function ProjectsArchivePage() {
  return (
    <main className="pseudo-blur relative z-10 min-h-screen bg-[#f5f5f0]/95 text-gray-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-16 sm:px-10">
        <header className="flex flex-col gap-6 border-b border-black/30 pb-12">
          <Link
            to="/"
            className="focus-outline inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-red-500 transition hover:text-red-600"
          >
            ← Back to Studio
          </Link>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.5em] text-black/60">Project Archive</p>
            <h1 className="text-4xl font-semibold uppercase tracking-tight sm:text-5xl">Work Index</h1>
            <p className="max-w-2xl text-sm text-black/70">
              A chronological record of shipped experiments, client collaborations, and exploratory builds.
            </p>
          </div>
        </header>

        <section className="mt-12 flex-1 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0 text-left">
            <thead>
              <tr className="text-xs uppercase tracking-[0.3em] text-black/60">
                <th className="border-b border-black/40 bg-black/5 px-4 py-3 font-medium">ID</th>
                <th className="border-b border-black/40 bg-black/5 px-4 py-3 font-medium">Project</th>
                <th className="border-b border-black/40 bg-black/5 px-4 py-3 font-medium">Discipline</th>
                <th className="border-b border-black/40 bg-black/5 px-4 py-3 font-medium">Year</th>
                <th className="border-b border-black/40 bg-black/5 px-4 py-3 font-medium">Summary</th>
                <th className="border-b border-black/40 bg-black/5 px-4 py-3 font-medium">Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="text-sm transition hover:bg-black/5">
                  <td className="border-b border-black/15 px-4 py-4 align-top font-mono text-xs uppercase tracking-[0.4em] text-black/60">
                    {project.id}
                  </td>
                  <td className="border-b border-black/15 px-4 py-4 align-top">
                    <div className="flex flex-col gap-1">
                      <span className="text-lg font-semibold tracking-tight text-black">{project.title}</span>
                      <span className="text-xs uppercase tracking-[0.4em] text-red-500">{project.role}</span>
                    </div>
                  </td>
                  <td className="border-b border-black/15 px-4 py-4 align-top text-sm text-black/70">
                    {project.skills.slice(0, 3).join(' · ')}
                  </td>
                  <td className="border-b border-black/15 px-4 py-4 align-top font-mono text-xs uppercase tracking-[0.4em] text-black">
                    {project.timeline}
                  </td>
                  <td className="border-b border-black/15 px-4 py-4 align-top text-sm text-black/70">
                    {project.descriptionShort}
                  </td>
                  <td className="border-b border-black/15 px-4 py-4 align-top">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="focus-outline inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-red-500 transition hover:text-red-600"
                      >
                        Visit
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-xs uppercase tracking-[0.3em] text-black/40">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}
