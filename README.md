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
  options: { threshold: 0.5 }, // IntersectionObserver options
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
  const { screenWidth, screenHeight } = useScreenSize();

  return (
    <section>
      <p>Current screen width: {screenWidth}px</p>
      <p>Current screen height: {screenHeight}px</p>

      {screenWidth < 768 ? <p>Mobile view</p> : <p>Desktop view</p>}
    </section>
  );
}
```

### useLocalStorage

A hook that provides a convenient way to store and retrieve data from localStorage with TypeScript support.

#### Usage

```tsx
import { useLocalStorage } from 'spicyhooks';

function MyComponent() {
  const [theme, setTheme, removeTheme] = useLocalStorage<string>(
    'theme',
    'light'
  ); // this is just an example

  return (
    <section>
      <h2>Current theme: {theme}</h2>
      <button onClick={() => setTheme('dark')}>Set Dark Theme</button>
      <button onClick={() => setTheme('light')}>Set Light Theme</button>
      <button onClick={removeTheme}>Reset Theme</button>
    </section>
  );
}
```

#### Parameters

The `useLocalStorage` hook accepts two parameters:

```tsx
useLocalStorage<T>(key: string, initialValue: T | null)
```

- `key`: The key under which the value will be stored in localStorage
- `initialValue`: The initial value to use if no value exists in localStorage

#### Return Value

The hook returns a tuple with three elements:

1. `item`: The current value (can be null)
2. `setValue`: Function to update the stored value
3. `removeItem`: Function to remove the item from localStorage

#### Type Safety

The hook is fully typed and supports generic types:

```tsx
// Example with a custom type
interface UserPreferences {
  theme: 'light' | 'dark';
  fontSize: number;
}

const [preferences, setPreferences, removePreferences] =
  useLocalStorage<UserPreferences>('preferences', {
    theme: 'light',
    fontSize: 16,
  });
```

```

This documentation:
1. Explains what the hook does
2. Shows practical usage examples
3. Details the parameters and return values
4. Includes type safety information
```
