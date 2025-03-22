# SpicyHooks

A collection of spicy React hooks

## Installation

```bash
npm install spicyhooks
# or
yarn add spicyhooks
# or
bun add spicyhooks
#or ...
```

## Available Hooks

### useInViewElement

A hook that detects when an element is in the viewport.

#### Usage

```tsx
import { useInViewElement } from 'spicyhooks';
// Other imports

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
  options: { threshold: 1 }, // IntersectionObserver options
  baseOn: 'id', // Attribute to select elements (default: 'id') id or class
});
```

- `options`: Standard IntersectionObserver options (threshold, rootMargin, etc.)
- `baseOn`: The attribute used to select elements to observe (defaults to 'id')

### useScreenSize

A hook that gives you the current screen size and automatically updates when the window is resized.

#### Usage

```tsx
import { useScreenSize } from 'spicyhooks';

function MyComponent() {
  const { width, height } = useScreenSize();

  return (
    <section>
      <p>Current screen width: {width}px</p>
      <p>Current screen height: {height}px</p>

      {width < 768 ? <p>Mobile view</p> : <p>Desktop view</p>}
    </section>
  );
}
```
