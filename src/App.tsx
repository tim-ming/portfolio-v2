import { Navigate, Route, Routes } from 'react-router';
import Background from './Background';
import Content from './Content';

export default function App() {
  return (
    <div className="relative">
      <a href="#main-content" className="skip-link focus-outline">
        Skip to main content
      </a>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <div className="fixed inset-0">
        <Background />
      </div>
    </div>
  );
}
