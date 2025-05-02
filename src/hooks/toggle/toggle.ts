import { useCallback, useState } from 'react';

const INITIAL_VALUE = false;

/**
 * A custom React hook for managing a boolean (on/off) toggle state.
 *
 * Provides the current state (`isOn`) and memoized functions to control the state:
 * `toggle` (flips the state), `setOn` (sets state to true), and `setOff` (sets state to false).
 * Useful for managing UI elements like checkboxes, modals, dropdowns, etc.
 *
 * @param {boolean} [initialValue=false] - The initial state of the toggle. Defaults to `false` (off).
 * @returns {{
 * isOn: boolean;
 * toggle: () => void;
 * setOn: () => void;
 * setOff: () => void;
 * }} An object containing:
 * - `isOn`: The current boolean state (`true` or `false`).
 * - `toggle`: A memoized function to invert the state (true -> false, false -> true).
 * - `setOn`: A memoized function to explicitly set the state to `true`.
 * - `setOff`: A memoized function to explicitly set the state to `false`.
 *
 * @example
 * const { isOn, toggle } = useToggle();
 * console.log(isOn); // false
 * toggle(); // Sets isOn to true
 *
 * @example
 * const { isOn: isVisible, toggle: toggleVisibility, setOn: show, setOff: hide } = useToggle(true);
 * console.log(isVisible); // true
 * hide(); // Sets isVisible to false
 * show(); // Sets isVisible to true
 *
 * @example
 * function ModalExample() {
 * const { isOn: isModalOpen, toggle: toggleModal, setOff: closeModal } = useToggle(false);
 *
 * return (
 * <section>
 * <button onClick={toggleModal}>Open Modal</button>
 *
 * {isModalOpen && (
 * <div className="modal-backdrop">
 * <div className="modal-content">
 * <p>This is the modal content!</p>
 * <button onClick={closeModal}>Close</button> {* Using setOff *}
 * </div>
 * </div>
 * )}
 * </section>
 * );
 * }
 */
function useToggle(initialValue: boolean = INITIAL_VALUE) {
  const [isOn, setIsOn] = useState(initialValue);

  const toggle = useCallback(() => {
    setIsOn((prev) => !prev);
  }, []);

  const setOn = useCallback(() => {
    setIsOn(true);
  }, []);

  const setOff = useCallback(() => {
    setIsOn(false);
  }, []);

  return { isOn, toggle, setOn, setOff };
}

export { useToggle };
