import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t bg-muted/20 py-12">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h2 className="text-2xl font-bold">@mosespacetoast</h2>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Beautiful toast notifications for React applications.
            </p>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/@mosespace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://www.linkedin.com/in/kisakyemoses/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} @mosespace/toast. All rights reserved.
          </p>
          <p className="mt-1">
            Made with ❤️ by{' '}
            <a
              className="text-amber-500 underline"
              target="_blank"
              href="https://mosespace.com"
            >
              mosespace
            </a>{' '}
            for developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
