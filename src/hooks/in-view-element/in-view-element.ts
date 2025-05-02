import { useEffect, useState } from 'react';
import type {
  InViewElement,
  InViewElementOptions,
} from './_lib/in-view-element.types';

const INITIAL_VALUE: InViewElement = {
  element: null,
  id: '',
};

/**
 * Custom React hook that tracks which element is currently intersecting the viewport
 * using the IntersectionObserver API.
 *
 * It observes all elements in the document that possess a specific attribute (defaulting to 'id').
 * When an element enters the viewport according to the specified threshold, the hook updates
 * its state to reflect that element. Only the *first* element found to be intersecting
 * in any observation callback cycle is considered "in view".
 *
 * @param {InViewElementOptions} [config={}] - Optional configuration object.
 * @param {IntersectionObserverInit} [config.options={ threshold: 0.9 }] - Options to pass directly to the IntersectionObserver constructor (e.g., `threshold`, `root`, `rootMargin`). Defaults to detecting intersection when 90% of the element is visible.
 * @param {string} [config.baseOn='id'] - The HTML attribute name used to query for elements to observe. Defaults to 'id'. Any element with this attribute will be observed.
 *
 * @returns {InViewElement} An object containing the currently "in view" element and its ID.
 * - `element`: The DOM element currently intersecting the viewport based on the options, or `null` if none is actively intersecting or initially.
 * - `id`: The value of the `id` attribute of the intersecting element, or an empty string (`''`) if no element is intersecting or initially.
 *
 * @example
 *
* const MyComponent = () => {
*   const inViewElement = useInViewElement();

*   return (
*     <section className='space-x-6'>
*       {navbarRoutes.map((route, i) => {
*         const elementId = route.href.replace('#', '');
*         const isInView = inViewElement.id === elementId;
*         return (
*           <Link
*             key={i}
*             href={route.href}
*             className={cn(
*               'rounded-md px-2 py-1',
*               isInView && 'bg-dark',
*               'hover:bg-dark/50'
*             )}
*           >
*             {route.title}
*           </Link>
*         );
*       })}
*     </section>
*   ); // This example shows how to highlight the active navigation link based on which section is in view
* };
 *
 */
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
          const targetElement = entry.target as HTMLElement;
          setInViewElement({
            element: targetElement,
            id: targetElement.id,
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
