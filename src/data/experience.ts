export type Experience = {
  company: string;
  link: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: 'Coevolve',
    link: 'https://coevolve.com',
    role: 'Full Stack Software Engineer',
    period: 'Oct 2025 — Current',
    location: 'Remote',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Zustand', 'AWS', 'DynamoDB', 'Lambda'],
    bullets: [
      'Built a crucial lead generation engine for the business by developing an end-to-end network diagnostic tool for potential clients using AWS Cognito, Lambda, and DynamoDB',
      "Redesigned the internal management platform's UI/UX to eliminate legacy friction points, improving day-to-day usability and reducing operational overhead for internal teams",
      'Migrated legacy codebase to modern solutions (Vite), achieving a 80% reduction in build times and instant development server startup, accelerating future development processes',
      'Led a self-initiated data layer redesign with RTK Query, cutting duplicate API response times from ~2s to instant through client-side caching, delivering a noticeably smoother user experience',
      'Architected an internal audit logging system using AWS Lambda and DynamoDB, providing the business with full historical transparency on management events and data export capabilities',
      'Engineered a shared monorepo infrastructure with centralized UI library and shared TypeScript package, reducing duplicated code and preventing integration bugs across Admin, Client and Backend services',
    ],
  },
  {
    company: 'Lizard Global',
    link: 'https://lizard.global',
    role: 'Software Engineer Intern',
    period: 'Nov 2023 — Feb 2024',
    location: 'Kuala Lumpur, MY',
    stack: ['MERN', 'Next.js', 'TypeScript', 'Zustand', 'GraphQL', 'Apollo Client', 'Figma'],
    bullets: [
      'Led integration of frontend deliverables as the frontend engineer on a production-grade learning management system, using Next.js, TypeScript, Apollo GraphQL, and MongoDB',
      'Developed 20+ accessible, responsive web pages from Figma designs, aligning with brand standards and design systems using customized Ant Design components',
      'Spearheaded migration of state management from Context API to Zustand, improving performance and user experience by eliminating unnecessary re-renders',
      'Designed a maintainable frontend structure with reusable React components and CSS modules, reducing code duplication and streamlining development for team handoff',
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
      'Mentored 150+ undergraduate computer science students on functional programming paradigms in TypeScript and Haskell alongside the course lecturer',
      'Delivered 9 contact hours per week, leading workshops and consultations to clarify advanced concepts and support student learning of challenging material',
    ],
  },
];
