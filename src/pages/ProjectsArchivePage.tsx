import { ArrowUpRight, Github, Globe } from 'lucide-react';
import { Link } from 'react-router';
import { projects } from '../data/projects';

export default function ProjectsArchivePage() {
  return (
    <main className="pseudo-blur relative z-10 min-h-screen bg-black/90 py-24 text-gray-300">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 sm:px-8">
        <header className="mb-12 flex flex-col gap-6">
          <Link
            to="/"
            className="focus-outline flex w-fit items-center gap-2 p-1 font-mono text-xs font-semibold text-blue-200/80 transition hover:text-gray-100"
          >
            ← BACK TO HOME
          </Link>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl">Project Archive</h1>
          </div>
        </header>

        <section className="flex-1">
          <table className="min-w-full border-separate border-spacing-0 text-left text-sm text-gray-300">
            <thead className="sticky top-0 bg-black/90">
              <tr className="font-mono text-xs text-gray-200">
                {['Year', 'Project', 'Discipline', 'Summary', 'Link'].map((header) => (
                  <th
                    key={header}
                    className={`border-b border-white/10 bg-white/5 px-4 py-3 font-semibold ${header === 'Discipline' ? 'hidden lg:table-cell' : ''} ${header === 'Summary' ? 'hidden md:table-cell' : ''} ${header === 'Link' ? 'hidden sm:table-cell' : ''} `}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projects
                .sort((a, b) => a.id.localeCompare(b.id))
                .sort((a, b) => b.timeline.localeCompare(a.timeline))
                .sort((a, b) => {
                  if (a.timeline === 'Present') return -1;
                  if (b.timeline === 'Present') return 1;
                  return 0;
                })
                .map((project) => (
                  <tr key={project.id} className="transition hover:bg-white/5">
                    <td
                      className={`custom-table-cell align-top font-mono text-xs font-medium uppercase ${
                        project.timeline === 'Present' ? 'text-blue-200' : 'text-gray-300'
                      }`}
                    >
                      {project.timeline}
                    </td>
                    <td className="custom-table-cell align-top">
                      <h2 className="mb-1 hidden min-w-[10em] text-base leading-tight font-medium text-gray-100 sm:block">
                        {project.title}
                      </h2>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group -mt-1 -ml-1 flex w-fit items-center gap-1 p-1 text-gray-100 sm:hidden"
                      >
                        <h2 className="animated-text block text-base leading-tight font-medium">{project.title}</h2>
                        <ArrowUpRight className="animated-arrow h-4 w-4 shrink-0 transition-all duration-200" />
                      </a>

                      <span className="inline-block font-mono text-xs leading-tight text-blue-200/80">
                        {project.role}
                      </span>
                    </td>
                    <td className="custom-table-cell hidden align-top lg:table-cell">
                      <div className="flex flex-wrap gap-1 text-xs text-blue-200/90">
                        {project.skills.map((skill) => (
                          <span key={skill} className="badge text-xs text-blue-200/90">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="custom-table-cell hidden align-top text-sm text-gray-400 md:table-cell">
                      {project.description}
                    </td>
                    <td className="custom-table-cell hidden align-top sm:table-cell">
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="focus-outline group cta flex w-fit items-center gap-2 px-3 py-2 text-xs"
                        >
                          {project.tooltip === 'Website' && <Globe className="h-4 w-4 transition-all duration-200" />}
                          {project.tooltip === 'GitHub' && <Github className="h-4 w-4 transition-all duration-200" />}

                          <span className="relative font-mono">{project.tooltip}</span>
                          {/* <ArrowUpRight className="h-3 w-3 transition-all duration-200" /> */}
                        </a>
                      ) : (
                        <span className="text-xs text-gray-500 uppercase">—</span>
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
