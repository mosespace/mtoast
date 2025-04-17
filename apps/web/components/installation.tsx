'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Installation() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-20">
      <div className="container max-w-4xl mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Quick Installation
        </h2>

        <Tabs defaultValue="pnpm" className="mx-auto">
          <TabsList className="mb-6 grid w-full grid-cols-3">
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
          </TabsList>

          <TabsContent value="pnpm" className="relative">
            <div className="relative overflow-hidden rounded-lg bg-muted p-4 font-mono text-sm">
              pnpm add @mosespace/toast
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={() =>
                  copyToClipboard('pnpm add @mosespace/toast', 'pnpm')
                }
              >
                {copied === 'pnpm' ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span className="sr-only">Copy to clipboard</span>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="npm" className="relative">
            <div className="relative overflow-hidden rounded-lg bg-muted p-4 font-mono text-sm">
              npm install @mosespace/toast
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={() =>
                  copyToClipboard('npm install @mosespace/toast', 'npm')
                }
              >
                {copied === 'npm' ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span className="sr-only">Copy to clipboard</span>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="yarn" className="relative">
            <div className="relative overflow-hidden rounded-lg bg-muted p-4 font-mono text-sm">
              yarn add @mosespace/toast
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={() =>
                  copyToClipboard('yarn add @mosespace/toast', 'yarn')
                }
              >
                {copied === 'yarn' ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span className="sr-only">Copy to clipboard</span>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
