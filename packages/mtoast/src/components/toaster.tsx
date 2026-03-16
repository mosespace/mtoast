'use client';

import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { useToastStore } from '../store/toast-store';
import toastStyles from '../styles.css';
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
  'top-left': 'mtoast-position-top-left',
  'top-center': 'mtoast-position-top-center',
  'top-right': 'mtoast-position-top-right',
  'bottom-left': 'mtoast-position-bottom-left',
  'bottom-right': 'mtoast-position-bottom-right',
  'bottom-center': 'mtoast-position-bottom-center',
};

const STYLE_ID = 'mtoast-styles';

function injectStyles() {
  if (typeof document === 'undefined') {
    return;
  }

  if (document.getElementById(STYLE_ID)) {
    return;
  }

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = toastStyles;
  document.head.appendChild(style);
}

export function Toaster({ position = 'bottom-right', gap = 8 }: ToasterProps) {
  const { toasts, removeToast } = useToastStore();

  useEffect(() => {
    injectStyles();
  }, []);

  return (
    <div
      className={`mtoast-container ${positionStyles[position]}`}
      style={{ gap: `${gap}px` }}
      role="region"
      aria-label="Notifications"
    >
      <AnimatePresence mode="sync">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onRemove={removeToast}
            position={position}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
