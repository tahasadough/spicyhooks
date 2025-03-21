interface ScreenSize {
  width: number;
  height: number;
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
