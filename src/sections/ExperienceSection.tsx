import { ArrowRight, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const experience = [
  {
    company: 'Lizard Global',
    link: 'https://lizard.global',
    role: 'Software Engineer Intern',
    period: 'Nov 2023 — Feb 2024',
    location: 'Kuala Lumpur, MY',
    stack: ['MERN', 'Next.js', 'TypeScript', 'SCSS', 'Zustand', 'GraphQL', 'Apollo Client', 'Ant Design', 'Figma'],
    bullets: [
      'Built features for a learning management system with MERN stack, collaborating closely with design and backend team members based on stakeholder requirements.',
      'Delivered Figma screens and components as responsive, production-ready web UI with WCAG-compliant, customized AntD components.',
      'Led the migration of state management from Context API to Zustand, reducing unnecessary re-renders and improving load times.',
      'Integrated type-safe GraphQL APIs with Apollo Client to support queries, mutations, and reliable UI updates with proper error and loading states.',
    ],
  },
  {
    company: 'Monash University',
    link: 'https://monash.edu.my',
    role: 'Class Mentor',
    period: 'Jul 2024 — Nov 2024',
    location: 'Subang Jaya, MY',
    stack: ['TypeScript', 'Haskell', 'Functional Programming'],
    bullets: [
      'Served as dedicated teaching assistant for FIT2102 Programming Paradigms course, mentoring 150+ undergraduate CS students on functional programming paradigms in TypeScript and Haskell.',
      "Delivered 9 contact hours per week, leading workshops and consultations to clarify advanced concepts and support students' learning on challenging course material.",
    ],
  },
];

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
