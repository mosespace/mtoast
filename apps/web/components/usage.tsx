'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const codeExample = `import { Toaster, toast } from '@mosespace/toast'

// 1. Add the Toaster component to your app-layout
function AppLayout() {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}

// 2. Use the toast function anywhere in your app
function YourComponent() {
  return (
    <button onClick={() => toast('Hello World!')}>
      Show Toast
    </button>
  )
}`;

export default function Usage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Simple Usage
        </h2>

        <div className="relative overflow-hidden rounded-lg bg-muted">
          <div className="flex items-center justify-between border-b px-4 py-2">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-muted-foreground">App.jsx</div>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs"
              onClick={copyToClipboard}
            >
              {copied ? (
                <>
                  <Check className="mr-1 h-3 w-3" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="mr-1 h-3 w-3" />
                  Copy
                </>
              )}
            </Button>
          </div>
          <pre className="overflow-x-auto p-4 text-sm">
            <code className="language-jsx">{codeExample}</code>
          </pre>
        </div>

        <div className="mt-8 text-center text-muted-foreground">
          <p>
            Just two simple steps to add beautiful toast notifications to your
            React app.
          </p>
        </div>
      </div>
    </section>
  );
}
