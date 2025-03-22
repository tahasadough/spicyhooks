interface ScreenSize {
  screenWidth: number;
  screenHeight: number;
}

interface InViewElement {
  id: string;
  element: Element | null;
}

interface InViewElementOptions {
  options?: IntersectionObserverInit;
  baseOn?: 'id' | 'class';
}

export type { ScreenSize, InViewElement, InViewElementOptions };
