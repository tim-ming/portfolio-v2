import { Navigate, Route, Routes } from 'react-router';
import Background from './Background';
import Content from './Content';
import ProjectsArchivePage from './pages/ProjectsArchivePage';
import { ScrollManager } from './components/ScrollManager';

export default function App() {
  return (
    <div className="relative">
      <a href="#main-content" className="skip-link focus-outline">
        Skip to main content
      </a>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/projects" element={<ProjectsArchivePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <div className="fade-in-brightness fixed top-0 left-0 h-lvh w-screen bg-black brightness-0">
        <Background />
      </div>
    </div>
  );
}
