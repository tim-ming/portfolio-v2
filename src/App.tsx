import { Navigate, Route, Routes } from 'react-router';
import Background from './Background';
import Content from './Content';
import ProjectsArchivePage from './pages/ProjectsArchivePage';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

export default function App() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(backgroundRef.current, {
      filter: 'brightness(1)',
      duration: 5,
    });
  });
  return (
    <div className="relative">
      <a href="#main-content" className="skip-link focus-outline">
        Skip to main content
      </a>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/projects" element={<ProjectsArchivePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <div ref={backgroundRef} className="fixed inset-0 bg-black brightness-0">
        <Background />
      </div>
    </div>
  );
}
