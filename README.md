## Usage

To start using the library, install it in your project:

```bash
npm install @mosespace/toast@latest
```

add the following to your tailwind.config.ts

```
  content: [
    ...
    './node_modules/@mosespace/toast/**/*.{js,ts,jsx,tsx}', // Include this line
  ],
```

Add `<Toaster />` to your app, it will be the place where all your toasts will be rendered.
After that you can use `toast()` from anywhere in your app.

```jsx
import { Toaster, toast } from '@mosespace/toast';

// ...

function App() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast.success('My first toast')}>
        Give me a toast
      </button>
      <button onClick={() => toast.custom(
        <div className="p-4 bg-purple-500 text-white rounded-lg">
          Custom Toast!
        </div>
      )}>
        Custom Toast
      </button>
    </div>
  );
}
```

## Documentation

Find the full API reference in the [documentation](https://mtoats.mosespace.com#getting-started).
