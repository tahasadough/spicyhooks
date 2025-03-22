import { useEffect, useState } from 'react';
import {
  InViewElement,
  InViewElementOptions,
} from '../../lib/utils/common/common.interface';

const useInViewElement = ({
  options = { threshold: 1 },
  baseOn = 'id',
}: InViewElementOptions = {}) => {
  const [inViewElement, setInViewElement] = useState<Element | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setInViewElement(entry.target);
          break; // Exit after the first intersecting entry -> just one element can be active at a time
        }
      }
    }, options);

    const elements = document.querySelectorAll<HTMLElement>(`[${baseOn}]`);

    if (elements.length > 0)
      elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [options, baseOn]);

  if (inViewElement) return inViewElement;
};

export { useInViewElement };
