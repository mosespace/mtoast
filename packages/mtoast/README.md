## Installation

```bash
npm install @mosespace/toast@latest
```

## Usage

No Tailwind configuration is required. Styles are bundled inside the package and injected automatically when `Toaster` is rendered.

Add `Toaster` once in your app, then call `toast` from anywhere.

```tsx
import { Toaster, toast } from '@mosespace/toast';

function App() {
  return (
    <div>
      <Toaster position="bottom-right" />
      <button
        onClick={() =>
          toast.success('Hello world!', 'This is my first toast with mtoast.')
        }
      >
        Click me to trigger toast
      </button>
    </div>
  );
}
```

## Simple Usage

```tsx
import { toast } from '@mosespace/toast';

toast.information('Heads up', 'Your changes were saved successfully.');
```

## Documentation

Find the full API reference in the [documentation](https://mtoast.mosespace.com/#getting-started).
