import NavBar, { type NavItem } from './NavBar';
import {
  ConnectSection,
  EducationSection,
  ExperienceSection,
  FooterSection,
  IntroSection,
  NowSection,
  ProjectsSection,
} from './sections';

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Connect', href: '#connect' },
];

export default function Content() {
  return (
    <main id="main-content" tabIndex={-1} className="pseudo-blur relative z-10 min-h-screen bg-black/80 text-gray-300">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 pt-16 pb-12 sm:px-8">
        <IntroSection />
        <NowSection />
        {/* <SectionSeparator />
        <AboutSection /> */}
        <SectionSeparator />
        <ProjectsSection />
        <SectionSeparator />
        <EducationSection />
        <SectionSeparator />
        <ExperienceSection />
        <SectionSeparator />
        <ConnectSection />
        <SectionSeparator />
        <FooterSection />
        <NavBar items={navItems} />
      </div>
    </main>
  );
}

function SectionSeparator() {
  // return <hr className="my-16 h-px w-full border-0 bg-white/10"></hr>;
  return <hr className="my-20 h-px w-full border-0"></hr>;
}
