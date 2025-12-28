import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { experience } from '../data/experience';

export default function ExperienceSection() {
  return (
    <section id="experience">
      <SectionHeader title="Work Experience" />
      <ul className="flex flex-col gap-16">
        {experience.map((item) => {
          const text = `${item.role} · ${item.company}`;
          const firstBlock = text.split(' ').slice(0, -1).join(' ') + ' ';
          const secondBlock = text.split(' ').slice(-1).join(' ');
          return (
            <li key={`${item.company}-${item.role}`} className="flex flex-col">
              <div className="mb-2 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-between sm:text-lg">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-outline group rounded-md"
                >
                  <span className="animated-text font-medium">{firstBlock}</span>

                  <span className="animated-text inline-block font-medium">
                    {secondBlock}
                    <ArrowUpRight className="animated-arrow ml-1 inline-block h-4 w-4" />
                  </span>
                </a>

                <span className="font-mono text-sm text-gray-400">{item.period}</span>
              </div>
              <ul className="mb-6 list-disc space-y-3 pl-4 text-sm text-gray-400 sm:text-base">
                {item.bullets.map((bullet) => (
                  <li className="tracking-normal" key={bullet}>
                    {bullet}
                  </li>
                ))}
              </ul>
              {item.stack && (
                <ul className="flex list-none flex-wrap gap-1">
                  {item.stack.map((tech) => (
                    <li key={tech} className="badge badge-blue text-xs sm:text-sm">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
      <div className="mt-12 flex justify-center">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          className="focus-outline group cta flex items-center gap-2"
        >
          <span className="relative font-mono">View Resume</span>
          <ArrowRight className="h-4 w-4 transition-all duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
