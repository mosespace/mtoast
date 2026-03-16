'use client';

import { motion } from 'framer-motion';
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  Info,
  Loader2,
  Zap,
  X,
} from 'lucide-react';
import { useEffect } from 'react';
import type { Toast as ToastType } from '../store/toast-store';
import { cn } from '../utils/cn';

const variantStyles = {
  success: {
    icon: CheckCircle,
    className: 'mtoast-variant-success',
  },
  error: {
    icon: AlertCircle,
    className: 'mtoast-variant-error',
  },
  information: {
    icon: Info,
    className: 'mtoast-variant-information',
  },
  warning: {
    icon: AlertTriangle,
    className: 'mtoast-variant-warning',
  },
  discovery: {
    icon: HelpCircle,
    className: 'mtoast-variant-discovery',
  },
  loading: {
    icon: Loader2,
    className: 'mtoast-variant-loading',
  },
  action: {
    icon: Zap,
    className: 'mtoast-variant-action',
  },
  custom: {
    icon: HelpCircle,
    className: 'mtoast-variant-loading',
  },
};

// Animation variants based on position
const getAnimationVariants = (position?: string) => {
  const isBottom = position?.includes('bottom');
  const isTop = position?.includes('top');
  const isLeft = position?.includes('left');
  const isRight = position?.includes('right');
  const isCenter = position?.includes('center');

  if (isBottom) {
    return {
      initial: { opacity: 0, y: 40, scale: 0.96 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: 24, scale: 0.98 },
    };
  }

  if (isTop) {
    return {
      initial: { opacity: 0, y: -40, scale: 0.96 },
      animate: { opacity: 1, y: 0, scale: 1 },
      exit: { opacity: 0, y: -24, scale: 0.98 },
    };
  }

  if (isLeft) {
    return {
      initial: { opacity: 0, x: -40, scale: 0.96 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: -24, scale: 0.98 },
    };
  }

  if (isRight) {
    return {
      initial: { opacity: 0, x: 40, scale: 0.96 },
      animate: { opacity: 1, x: 0, scale: 1 },
      exit: { opacity: 0, x: 24, scale: 0.98 },
    };
  }

  // Default (center or no position specified)
  return {
    initial: { opacity: 0, y: -30, scale: 0.96 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.98 },
  };
};

interface ToastProps extends ToastType {
  onRemove: (id: string) => void;
  position?: string; // Add position prop
}

export function Toast({
  id,
  title,
  message,
  variant = 'success',
  duration = 5000,
  action,
  onRemove,
  position, // Add position prop
  customComponent,
}: ToastProps) {
  const animations = getAnimationVariants(position);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onRemove(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, id, onRemove]);

  // If it's a custom toast with a custom component, render it
  if (variant === 'custom' && customComponent) {
    return (
      <motion.div
        layout
        initial={animations.initial}
        animate={animations.animate}
        exit={animations.exit}
        transition={{ type: 'spring', stiffness: 320, damping: 30, mass: 0.9 }}
        className="mtoast-custom-wrapper"
        role="alert"
      >
        {customComponent}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onRemove(id)}
          className="mtoast-custom-close"
          aria-label="Close notification"
        >
          <X className="mtoast-close-icon" />
        </motion.button>
      </motion.div>
    );
  }

  const Icon = variantStyles[variant].icon;
  const variantClassName = variantStyles[variant].className;

  return (
    <motion.div
      layout
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
      transition={{ type: 'spring', stiffness: 320, damping: 30, mass: 0.9 }}
      className={cn('mtoast-toast', variantClassName)}
      role="alert"
    >
      <Icon className={cn('mtoast-icon', variant === 'loading' && 'mtoast-spin')} />
      <div className="mtoast-content">
        {title && <h3 className="mtoast-title">{title}</h3>}
        <div className="mtoast-message-row">
          <p className="mtoast-message">{message}</p>
          {action && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={action.onClick}
              className="mtoast-action"
            >
              {action.label}
            </motion.button>
          )}
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => onRemove(id)}
        className="mtoast-close"
        aria-label="Close notification"
      >
        <X className="mtoast-close-icon" />
      </motion.button>
    </motion.div>
  );
}
