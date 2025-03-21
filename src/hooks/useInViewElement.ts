import { useEffect, useState } from 'react';
import {
  InViewElement,
  InViewElementOptions,
} from '../../lib/utils/common/common.interface';

const INITIAL_VALUE: InViewElement = {
  element: null,
  id: '',
};

const useInViewElement = ({
  options = { threshold: 1 },
  baseOn = 'id',
}: InViewElementOptions = {}): InViewElement => {
  const [activeSection, setActiveSection] =
    useState<InViewElement>(INITIAL_VALUE);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection({
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

  return activeSection;
};

export { useInViewElement };
