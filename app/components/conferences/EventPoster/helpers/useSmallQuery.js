import { useEffect, useState } from 'react';

export const useSmallScreen = (breakpoint = 576) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => setIsSmallScreen(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [breakpoint]);

  return isSmallScreen;
};
