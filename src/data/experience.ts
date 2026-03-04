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
      'Built a lead generation engine for the business by developing an end-to-end network diagnostic tool for potential clients using AWS Lambda and DynamoDB',
      "Developed and maintained core modules within the business's internal automation platform, saving internal teams up to 10 hours of manual work per week",
      'Built a before/after performance monitoring tool for client network upgrades, allowing teams to visualize improvements and validate deployment ROI with automated reporting for client presentations',
      'Redesigned data layer with RTK Query and client-side caching, cutting redundant API response times from ~2s to instant',
      'Architected an internal audit logging system using AWS Lambda and DynamoDB, providing the business with enabling full audit trails across management operations',
      'Migrated legacy codebase from deprecated tooling to Vite, reducing build times by 400%, eliminating dev server startup delays, and resolving unpatched dependency vulnerabilities',
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
