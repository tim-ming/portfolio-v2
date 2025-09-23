import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-section]').forEach((section) => {
        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 48 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      id="main-content"
      ref={containerRef}
      tabIndex={-1}
      className="pseudo-blur relative z-10 min-h-screen bg-black/80 text-gray-300"
    >
      <NavBar items={navItems} />
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
      </div>
    </main>
  );
}

function SectionSeparator() {
  // return <hr className="my-16 h-px w-full border-0 bg-white/10"></hr>;
  return <hr className="my-16 h-px w-full border-0"></hr>;
}
