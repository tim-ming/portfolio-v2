import SectionHeader from '../components/SectionHeader';

const experience = [
  {
    company: 'Lizard Global',
    role: 'Software Engineer Intern',
    period: 'Nov 2023 — Feb 2024',
    location: 'Kuala Lumpur, MY',
    stack: ['MERN', 'Next.js', 'TypeScript', 'SCSS', 'Zustand', 'GraphQL', 'Apollo Client', 'Ant Design', 'Figma'],
    bullets: [
      'Built 20+ features for a learning management system in MERN stack across 12-week sprints, working closely with design and backend teams.',
      'Delivered 30+ Figma screens and components into responsive, production-ready web UI components with WCAG compliance in highly customised AntD components.',
      'Spearheaded state management migration from Context API to Zustand, eliminating significant overhead in unnecessary re-renders and improving page load times.',
      'Integrated 30+ type-safe GraphQL APIs with Apollo Client to support queries, mutations and reliable error/loading states for responsive UI updates.',
    ],
  },
  {
    company: 'Monash University',
    role: 'Class Assistant (FIT2102 Programming Paradigms)',
    period: 'Jul 2024 — Nov 2024',
    location: 'Subang Jaya, MY',
    stack: ['TypeScript', 'Haskell', 'Functional Programming'],
    bullets: [
      'Served as dedicated teaching assistant for FIT2102 Programming Paradigms course, mentoring 150+ undergraduate CS students on functional programming paradigms in TypeScript and Haskell.',
      "Delivered 9 contact hours per week, leading online and in-person consultations to clarify advanced concepts and support students' learning on challenging course material.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" data-section>
      <SectionHeader title="Work Experience" />
      <ul className="flex flex-col gap-20">
        {experience.map((item) => (
          <li key={`${item.company}-${item.role}`}>
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex w-full flex-col leading-tight">
                {/* Left column */}
                <div className="flex items-end justify-between">
                  <span className="font-medium text-white">{item.role}</span>
                  <span className="text-gray-300">{item.period}</span>
                </div>

                {/* Right column */}
                <div className="flex items-start justify-between">
                  <span className="text-gray-500">{item.company}</span>
                  <span className="text-gray-500">{item.location}</span>
                </div>
              </div>
            </div>
            <ul className="mb-6 list-disc space-y-3 pl-5 text-gray-400">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {item.stack && (
              <ul className="flex list-none flex-wrap gap-1 text-xs text-gray-300">
                {item.stack.map((tech) => (
                  <li key={tech} className="badge badge-blue">
                    {tech}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
