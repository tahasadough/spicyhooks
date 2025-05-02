import { useEffect, useState } from 'react';
import type { ScreenSize } from './_lib/screen-size.types';

const INITIAL_VALUE: ScreenSize = {
  width: 0,
  height: 0,
};

/**
 * A custom React hook that tracks the current inner dimensions (width and height) of the browser window.
 *
 * It attaches a 'resize' event listener to the window and updates the returned dimensions
 * whenever the window size changes. The hook automatically handles setting the initial dimensions
 * on mount and cleaning up the event listener on unmount.
 *
 * @returns {ScreenSize} An object containing the current screen dimensions:
 * - `width` (number): The current inner width of the window in pixels (`window.innerWidth`).
 * - `height` (number): The current inner height of the window in pixels (`window.innerHeight`).
 *
 * @example
 * function ResponsiveLayout() {
 * const { width, height } = useScreenSize();
 *
 * const isSmallScreen = width < 600;
 *
 * return (
 * <div>
 * <p>Current window size: {width}px x {height}px</p>
 * <p>{isSmallScreen && "Mobile"}</p>
 * </div>
 * );
 * }
 */
function useScreenSize(): ScreenSize {
  const [screenSize, setScreenSize] = useState<ScreenSize>(INITIAL_VALUE);

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
}

export { useScreenSize };
