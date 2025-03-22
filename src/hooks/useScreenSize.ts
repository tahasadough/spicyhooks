import { useEffect, useState } from 'react';
import { ScreenSize } from '../../lib/utils/common/common.interface';

const INITIAL_VALUE: ScreenSize = {
  screenWidth: 0,
  screenHeight: 0,
};

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(INITIAL_VALUE);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

export { useScreenSize };
