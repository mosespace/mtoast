import { useToastStore, type ToastVariant } from './store/toast-store';

interface ToastOptions {
  duration?: number;
}

function createToast(
  title: string | null,
  message: string,
  variant: ToastVariant,
  options?: ToastOptions,
) {
  const { addToast } = useToastStore.getState();
  addToast({
    title: title ?? '',
    message,
    variant,
    duration: options?.duration ?? 5000,
  });
}

export const toast = {
  success(title: string, message: string, options?: ToastOptions) {
    createToast(title, message, 'success', options);
  },
  error(title: string, message: string, options?: ToastOptions) {
    createToast(title, message, 'error', options);
  },
  information(title: string, message: string, options?: ToastOptions) {
    createToast(title, message, 'information', options);
  },
  warning(title: string, message: string, options?: ToastOptions) {
    createToast(title, message, 'warning', options);
  },
  discovery(title: string, message: string, options?: ToastOptions) {
    createToast(title, message, 'discovery', options);
  },
};
