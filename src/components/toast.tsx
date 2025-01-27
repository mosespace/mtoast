'use client';

import { motion } from 'framer-motion';
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  Info,
  X,
} from 'lucide-react';
import { useEffect } from 'react';
import type { Toast as ToastType } from '../store/toast-store';
import { cn } from '../utils/cn';

const variantStyles = {
  success: {
    icon: CheckCircle,
    styles: {
      wrapper:
        'bg-gradient-to-r from-emerald-50 to-white dark:bg-gradient-to-r dark:from-emerald-500/10 dark:to-emerald-500/[0.02]',
      text: 'text-emerald-700 dark:text-emerald-400',
      border: 'border-emerald-100/60 dark:border-emerald-500/20',
      icon: 'text-emerald-500 dark:text-emerald-400',
    },
  },
  error: {
    icon: AlertCircle,
    styles: {
      wrapper:
        'bg-gradient-to-r from-red-50 to-white dark:bg-gradient-to-r dark:from-red-500/10 dark:to-red-500/[0.02]',
      text: 'text-red-700 dark:text-red-400',
      border: 'border-red-100/60 dark:border-red-500/20',
      icon: 'text-red-500 dark:text-red-400',
    },
  },
  information: {
    icon: Info,
    styles: {
      wrapper:
        'bg-gradient-to-r from-blue-50 to-white dark:bg-gradient-to-r dark:from-blue-500/10 dark:to-blue-500/[0.02]',
      text: 'text-blue-700 dark:text-blue-400',
      border: 'border-blue-100/60 dark:border-blue-500/20',
      icon: 'text-blue-500 dark:text-blue-400',
    },
  },
  warning: {
    icon: AlertTriangle,
    styles: {
      wrapper:
        'bg-gradient-to-r from-amber-50 to-white dark:bg-gradient-to-r dark:from-amber-500/10 dark:to-amber-500/[0.02]',
      text: 'text-amber-700 dark:text-amber-400',
      border: 'border-amber-100/60 dark:border-amber-500/20',
      icon: 'text-amber-500 dark:text-amber-400',
    },
  },
  discovery: {
    icon: HelpCircle,
    styles: {
      wrapper:
        'bg-gradient-to-r from-sky-50 to-white dark:bg-gradient-to-r dark:from-sky-500/10 dark:to-sky-500/[0.02]',
      text: 'text-sky-700 dark:text-sky-400',
      border: 'border-sky-100/60 dark:border-sky-500/20',
      icon: 'text-sky-500 dark:text-sky-400',
    },
  },
};

interface ToastProps extends ToastType {
  onRemove: (id: string) => void;
}

export function Toast({
  id,
  title,
  message,
  variant = 'success',
  duration = 5000,
  onRemove,
}: ToastProps) {
  const Icon = variantStyles[variant].icon;
  const styles = variantStyles[variant].styles;

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onRemove(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, id, onRemove]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className={cn(
        'flex items-start max-w-md w-full p-4 rounded-lg border shadow-sm',
        'backdrop-blur-sm relative',
        styles.wrapper,
        styles.border,
      )}
      role="alert"
    >
      <Icon className={cn('h-5 w-5 shrink-0 mt-0.5 mr-3', styles.icon)} />
      <div className="flex-grow">
        <h3 className={cn('text-sm font-semibold', styles.text)}>{title}</h3>
        <p className={cn('text-sm mt-0.5 font-normal opacity-90', styles.text)}>
          {message}
        </p>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onRemove(id)}
        className={cn(
          'shrink-0 rounded-lg p-1 transition-colors duration-200',
          styles.text,
          'hover:opacity-80',
        )}
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </motion.button>
    </motion.div>
  );
}
