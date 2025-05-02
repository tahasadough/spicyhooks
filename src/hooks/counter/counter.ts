import { useCallback, useState } from 'react';

const INITIAL_VALUE = 0;

/**
 * A custom React hook for managing a counter state.
 *
 * Provides the current count and memoized functions to increment, decrement,
 * and reset the count to its initial value.
 *
 * @param {number} [initialValue=0] - The starting value for the counter. Defaults to 0 if not provided.
 * @returns {{
 * count: number;
 * increment: () => void;
 * decrement: () => void;
 * reset: () => void;
 * }} An object containing:
 * - `count`: The current state of the counter.
 * - `increment`: A memoized function that increases the count by 1.
 * - `decrement`: A memoized function that decreases the count by 1.
 * - `reset`: A memoized function that resets the count to the `initialValue`.
 *
 * @example
 * const { count, increment, decrement, reset } = useCounter();
 *
 * @example
 * const { count: score, increment: increaseScore, decrement: decreaseScore } = useCounter(100);
 *
 * @example
 * function MyCounterComponent() {
 * const { count, increment, decrement, reset } = useCounter(5);
 *
 * return (
 * <section>
 * <h2>Counter</h2>
 * <p>Current Count: {count}</p>
 * <button onClick={increment}>+</button>
 * <button onClick={decrement}>-</button>
 * <button onClick={reset}>Reset to 5</button>
 * </section>
 * );
 * }
 */
function useCounter(initialValue: number = INITIAL_VALUE) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);

  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return { count, increment, decrement, reset };
}

export { useCounter };
