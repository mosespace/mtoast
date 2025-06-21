## Usage

To start using the library, install it in your project:

```bash
npm install @mosespace/toast@latest
```

add the following to your tailwind.config.ts if using tailwind v3 and below

```bash
  content: [
    ...
    './node_modules/@mosespace/toast/**/*.{js,ts,jsx,tsx}', // Include this line
  ],
```

or add this to your styles if using tailwind v4 and above

```bash
  @source '../node_modules/@mosespace/toast*.{js,ts,jsx,tsx}';

```

Add `<Toaster />` to your app, it will be the place where all your toasts will be rendered.
After that you can use `toast()` from anywhere in your app.

```tsx
import { Toaster, toast } from '@mosespace/toast';

// ...

function App() {
  return (
    <div>
      <Toaster position={'bottom-right'} />
      <button
        onClick={() =>
          toast.success('Hello world,', 'This is my first toast with mtoast')
        }
      >
        Click me to trigger toast
      </button>
    </div>
  );
}
```

## Documentation

Find the full API reference in the [documentation](https://mtoast.mosespace.com/#getting-started).
