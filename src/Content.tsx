import NavBar from './NavBar';
import {
  ConnectSection,
  EducationSection,
  ExperienceSection,
  FooterSection,
  IntroSection,
  NowSection,
  ProjectsSection,
} from './sections';

export default function Content() {
  return (
    <main id="main-content" tabIndex={-1} className="pseudo-blur relative z-10 min-h-screen bg-black/80 text-gray-300">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 pt-16 pb-12 sm:px-8">
        <IntroSection />
        <NowSection />
        <SectionSeparator />
        <ProjectsSection />
        <SectionSeparator />
        <EducationSection />
        <SectionSeparator />
        <ExperienceSection />
        <SectionSeparator />
        <ConnectSection />
        <SectionSeparator />
        <NavBar />
        <FooterSection />
      </div>
    </main>
  );
}

function SectionSeparator() {
  // return <hr className="my-16 h-px w-full border-0 bg-white/10"></hr>;
  return <hr className="my-16 h-px w-full border-0"></hr>;
}
