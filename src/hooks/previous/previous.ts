import { useEffect, useRef } from 'react';

/**
 * A custom React hook that returns the value of a variable from the previous render cycle.
 *
 * This hook is useful for comparing props or state between renders, for example,
 * to trigger effects only when a specific value has changed.
 *
 * It works by storing the current value in a ref after the component renders,
 * so on the next render, the ref still holds the value from the previous cycle.
 *
 * @template T The type of the value being tracked. Can be any type.
 *
 * @param {T} value The value whose previous instance you want to track.
 * This would typically be a prop or state variable.
 *
 * @returns {T | null} The value from the previous render.
 * Returns `null` on the initial render, as there's no "previous" value yet.
 *
 * @example
 * function Counter() {
 * const [count, setCount] = useState(0);
 *
 * const prevCount = usePrevious(count);
 *
 * return (
 *   <section>
 *     <button onClick={() => setCount((prev) => prev + 1)}>+</button>
 *     <p>prev:{prevCount}</p>
 *     <p>current: {count}</p>
 *  </section>
 * );
 * }
 */
function usePrevious<T>(value: T): T | null {
  const ref = useRef<T>(null);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export { usePrevious };
