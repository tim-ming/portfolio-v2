import { useEffect } from 'react';
import { useLocation } from 'react-router';

const scrollPositions = new Map<string, number>();

export function ScrollManager() {
  const { pathname } = useLocation();
  const key = pathname; // include ?query params if needed

  useEffect(() => {
    // restore scroll
    const saved = scrollPositions.get(key);
    if (saved !== undefined) {
      window.scrollTo({ top: saved, behavior: 'instant' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // save scroll position continuously
    const handleScroll = () => {
      scrollPositions.set(key, window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [key]);

  return null;
}
