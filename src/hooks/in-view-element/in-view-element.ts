import { useEffect, useState } from 'react';
import type {
  InViewElement,
  InViewElementOptions,
} from './_lib/in-view-element.types';

const INITIAL_VALUE: InViewElement = {
  element: null,
  id: '',
};

function useInViewElement({
  options = { threshold: 0.9 },
  baseOn = 'id',
}: InViewElementOptions = {}): InViewElement {
  const [inViewElement, setInViewElement] =
    useState<InViewElement>(INITIAL_VALUE);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setInViewElement({
            element: entry.target,
            id: entry.target.id,
          });
          break; // Exit after the first intersecting entry -> just one element can be active at a time
        }
      }
    }, options);

    const elements = document.querySelectorAll<HTMLElement>(`[${baseOn}]`);

    if (elements.length > 0)
      elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [options, baseOn]);

  return inViewElement;
}

export { useInViewElement };
