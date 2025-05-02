interface InViewElement {
  id: string;
  element: Element | null;
}

interface InViewElementOptions {
  options?: IntersectionObserverInit;
  baseOn?: 'id' | 'class';
}

export type { InViewElement, InViewElementOptions };
