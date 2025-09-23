import { useMediaQuery } from 'usehooks-ts';

/**
 * Hook to get screen size based on Tailwind-style breakpoints
 */
export function useScreenSize() {
  const isXs = useMediaQuery('(max-width: 639px)');
  const isSm = useMediaQuery('(min-width: 640px) and (max-width: 767px)');
  const isMd = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const isLg = useMediaQuery('(min-width: 1024px) and (max-width: 1279px)');
  const isXl = useMediaQuery('(min-width: 1280px) and (max-width: 1535px)');
  const is2xl = useMediaQuery('(min-width: 1536px)');

  // return the active breakpoint and flags
  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
    current:
      (isXs && 'xs') ||
      (isSm && 'sm') ||
      (isMd && 'md') ||
      (isLg && 'lg') ||
      (isXl && 'xl') ||
      (is2xl && '2xl') ||
      'unknown',
  };
}

export function useScreenLargerThan(breakpoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl') {
  const queries: Record<typeof breakpoint, string> = {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    '2xl': '(min-width: 1536px)',
  };

  return useMediaQuery(queries[breakpoint]);
}
