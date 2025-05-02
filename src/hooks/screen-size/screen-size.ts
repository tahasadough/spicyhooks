import { useEffect, useState } from 'react';
import type { ScreenSize } from './_lib/screen-size.types';

const INITIAL_VALUE: ScreenSize = {
  screenWidth: 0,
  screenHeight: 0,
};

function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>(INITIAL_VALUE);

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}

export { useScreenSize };
