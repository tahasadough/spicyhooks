# spicyhooks

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

A hook that detects when an element is in the viewport using the Intersection Observer API.

#### Usage

```tsx
import { useInViewElement } from 'spicyhooks';

function MyComponent() {
  const { element, id } = useInViewElement();

  return (
    <div>
      <h1 id='section1'>Section 1</h1>
      <div>Content for section 1...</div>

      <h1 id='section2'>Section 2</h1>
      <div>Content for section 2...</div>

      <p>Currently visible section: {id}</p>
    </div>
  );
}
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

A hook that returns the current dimensions of the viewport and updates when the window is resized.

#### Usage

```tsx
import { useScreenSize } from 'spicyhooks';

function MyComponent() {
  const { width, height } = useScreenSize();

  return (
    <div>
      <p>Current screen width: {width}px</p>
      <p>Current screen height: {height}px</p>

      {width < 768 ? <p>Mobile view</p> : <p>Desktop view</p>}
    </div>
  );
}
```

## License

MIT
