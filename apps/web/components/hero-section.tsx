'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast, Toaster } from '@mosespace/toast';

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);

  const showToast = () => {
    toast.discovery(
      'Hello there!',
      'This is a toast notification from @mosespace/toast',
    );
  };

  return (
    <>
      <section className="relative overflow-hidden max-w-full mx-auto py-24 md:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 opacity-0 transition-opacity duration-500',
            isHovering && 'opacity-0',
          )}
        ></div>
        <div className="container relative z-10 max-w-5xl">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="mb-4 inline-block rounded-full bg-muted px-4 py-1.5 text-sm font-medium">
              Introducing @mosespace/toast v3.0
            </div>
            <h1
              className="mb-6 text-4xl hero-text font-bold tracking-tight sm:text-5xl md:text-6xl"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Beautiful toast notifications for{' '}
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                React
              </span>
            </h1>
            <p className="mb-10 max-w-prose text-lg text-muted-foreground md:text-xl">
              A lightweight, customizable, and accessible toast component that
              makes notifications in your React app delightful.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" onClick={showToast}>
                Try a toast
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link
                  href="https://github.com/mosespace/mtoast"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  <span>Star on GitHub</span>
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
              <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
              <Star className="h-4 w-4 text-amber-500" fill="currentColor" />
              <span>2.5k+ stars on GitHub</span>
            </div>
          </div>
        </div>
      </section>

      <Toaster position="bottom-right" />
    </>
  );
}
