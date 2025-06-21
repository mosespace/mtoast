'use client';

import { AnimatePresence } from 'framer-motion';
import { useToastStore } from '../store/toast-store';
import { Toast } from './toast';

export interface ToasterProps {
  position?:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'top-center';
  gap?: number;
}

const positionStyles = {
  'top-left': 'top-0 left-0',
  'top-center': 'top-0 left-1/2 -translate-x-1/2',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
};

export function Toaster({ position = 'bottom-right', gap = 8 }: ToasterProps) {
  const { toasts, removeToast } = useToastStore();

  return (
    <div
      className={`fixed z-50 m-4 flex flex-col ${positionStyles[position]}`}
      style={{ gap: `${gap}px` }}
      role="region"
      aria-label="Notifications"
    >
      <AnimatePresence mode="sync">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onRemove={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  );
}
