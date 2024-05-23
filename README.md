# React Utils

This library provides a set of utility functions for working with React components and hooks.

## Installation

npm install Fasunle/react-utils

## Usage

### `useDebounce`

The `useDebounce` hook is a utility for debouncing a value. It takes two arguments:

1. `value`: The value to debounce.
2. `delay` (optional): The delay in milliseconds. Defaults to `200`.

Example:

```tsx
import { useHashRoute } from 'Fasunle/react-utils';

const { hash, changeHash } = useHashRoute();
```

Register it to a click event or any other trigger as follow:

```tsx
<button onClick={() => changeHash('/settings')}>Settings</button>
```
