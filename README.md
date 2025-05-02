# SpicyHooks 🌶️

A collection of spicy React hooks

## Installation

```sh
npm install spicyhooks
# or
yarn add spicyhooks
# or
bun add spicyhooks
#or ...
```

## Available Hooks

### useCounter

A custom React hook for managing a counter state.

#### Usage

```tsx
import { useCounter } from 'spicyhooks';

function MyCounterComponent() {
  const { count, increment, decrement, reset } = useCounter(5);

  return (
    <section>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset to 5</button>
    </section>
  );
}
```

### usePrevious

A custom React hook that returns the value of a variable from the previous render cycle.

#### Usage

```tsx
import { usePrevious } from 'spicyhooks';

function Counter() {
  const [count, setCount] = useState(0);

  const prevCount = usePrevious(count);

  return (
    <section>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <p>prev:{prevCount}</p>
      <p>current: {count}</p>
    </section>
  );
}
```

### useToggle

A custom React hook for managing a boolean (on/off) toggle state.

```tsx
import { useToggle } from 'spicyhooks';

  function ModalExample() {
  const { isOn: isModalOpen, toggle: toggleModal, setOff: closeModal } = useToggle(false);

  return (
  <section>
  <button onClick={toggleModal}>Open Modal</button>

  {isModalOpen && (
  <div className="modal-backdrop">
  <div className="modal-content">
  <p>This is the modal content!</p>
  <button onClick={closeModal}>Close</button> {* Using setOff *}
  </div>
  </div>
  )}
  </section>
  );
  }
```

### useInViewElement

Custom React hook that tracks which element is currently intersecting the viewport
using the IntersectionObserver API.

#### Usage

```tsx
import { useInViewElement } from 'spicyhooks';

const MyComponent = () => {
  const inViewElement = useInViewElement();

  return (
    <section className='space-x-6'>
      {navbarRoutes.map((route, i) => {
        const elementId = route.href.replace('#', '');
        const isInView = inViewElement.id === elementId;
        return (
          <Link
            key={i}
            href={route.href}
            className={cn(
              'rounded-md px-2 py-1',
              isInView && 'bg-dark',
              'hover:bg-dark/50'
            )}
          >
            {route.title}
          </Link>
        );
      })}
    </section>
  ); // This example shows how to highlight the active navigation link based on which section is in view
};
```

#### Options

The `useInViewElement` hook accepts an options object with the following properties:

```tsx
useInViewElement({
  options: { threshold: 0.5 }, // IntersectionObserver options
  baseOn: 'id', // Attribute to select elements (default: 'id') id or class
});
```

- `options`: Standard IntersectionObserver options (threshold, rootMargin, etc.)
- `baseOn`: The attribute used to select elements to observe (defaults to 'id')

### useScreenSize

A custom React hook that tracks the current inner dimensions (width and height) of the browser window.

#### Usage

```tsx
import { useScreenSize } from 'spicyhooks';

function ResponsiveLayout() {
  const { width, height } = useScreenSize();

  const isSmallScreen = width < 600;

  return (
    <div>
      <p>
        Current window size: {width}px x {height}px
      </p>
      <p>{isSmallScreen && 'Mobile'}</p>
    </div>
  );
}
```
