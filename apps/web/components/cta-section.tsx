'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { toast } from '@mosespace/toast';

export function CtaSection() {
  return (
    <section className="py-20 px-8">
      <div className="container max-w-5xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-br from-amber-600/90 via-amber-600 to-orange-600/20 p-8 md:p-12 lg:p-16 text-primary-foreground">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Accessible toast that makes notifications in your React app
              delightful.
            </h2>
            <p className="mt-4 text-xl opacity-90">
              Join hundreds of developers and communities using @MTOAST to
              render beautiful react toasts, in there modern looking nice
              front-end.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="https://www.mosespace.com" target="_blank">
                  Read more about the developer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
                onClick={() =>
                  toast.success(
                    'Hello, am now in ACTION!',
                    `You wanted to see me in action, and here i am now siling at you 😂😂`,
                  )
                }
              >
                See it in action
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
