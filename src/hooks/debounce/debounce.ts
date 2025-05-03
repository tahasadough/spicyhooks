import { useEffect, useState } from 'react';

/**
 * A custom React hook that debounces a value.
 *
 * This hook delays updating the value until a specified time has elapsed since the last change.
 * Useful for delaying expensive operations like API calls based on rapidly changing input (e.g., search box).
 *
 * @template T The type of the value being debounced.
 * @param {T} value The value to debounce.
 * @param {number} delay The delay in milliseconds before the debounced value is updated.
 * @returns {T} The debounced value.
 *
 * @example
 * function CounterComponent() {
 * const [count, setCount] = useState(0);
 *
 * const debounceCount = useDebounce(count, 3000);
 *
 * return (
 * <section>
 * <button onClick={() => setCount((prev) => prev + 1)}>+</button>
 * <p>Instant Count: {count}</p>
 * <p>Debounced Count: {debounceCount}</p>
 * </section>
 * );
 * }
 */
function useDebounce<T>(value: T, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
}

export { useDebounce };
