import { useToastStore, type ToastVariant } from './store/toast-store';
import { ReactNode } from 'react';

interface ToastAction {
  label: string;
  onClick: () => void;
}

interface ToastOptions {
  duration?: number;
  action?: ToastAction;
}

interface CustomToastOptions extends ToastOptions {
  customComponent?: ReactNode;
}

function createToast(
  titleOrMessage: string,
  messageOrOptions?: string | ToastOptions,
  variant?: ToastVariant,
  options?: ToastOptions,
) {
  const { addToast } = useToastStore.getState();

  // If second param is string, we have title + message
  if (typeof messageOrOptions === 'string') {
    addToast({
      title: titleOrMessage,
      message: messageOrOptions,
      variant: variant!,
      duration: options?.duration ?? 5000,
      action: options?.action,
      customComponent: (options as CustomToastOptions)?.customComponent,
    });
  } else {
    // Otherwise, first param is message only
    addToast({
      message: titleOrMessage,
      variant: variant!,
      duration: (messageOrOptions as ToastOptions)?.duration ?? 5000,
      action: (messageOrOptions as ToastOptions)?.action,
      customComponent: (messageOrOptions as CustomToastOptions)?.customComponent,
    });
  }
}

export const toast = {
  success(
    titleOrMessage: string,
    messageOrOptions?: string | ToastOptions,
    options?: ToastOptions,
  ) {
    createToast(titleOrMessage, messageOrOptions, 'success', options);
  },

  error(
    titleOrMessage: string,
    messageOrOptions?: string | ToastOptions,
    options?: ToastOptions,
  ) {
    createToast(titleOrMessage, messageOrOptions, 'error', options);
  },

  information(
    titleOrMessage: string,
    messageOrOptions?: string | ToastOptions,
    options?: ToastOptions,
  ) {
    createToast(titleOrMessage, messageOrOptions, 'information', options);
  },

  warning(
    titleOrMessage: string,
    messageOrOptions?: string | ToastOptions,
    options?: ToastOptions,
  ) {
    createToast(titleOrMessage, messageOrOptions, 'warning', options);
  },

  discovery(
    titleOrMessage: string,
    messageOrOptions?: string | ToastOptions,
    options?: ToastOptions,
  ) {
    createToast(titleOrMessage, messageOrOptions, 'discovery', options);
  },

  loading(
    titleOrMessage: string,
    messageOrOptions?: string | ToastOptions,
    options?: ToastOptions,
  ) {
    createToast(titleOrMessage, messageOrOptions, 'loading', options);
  },
  custom(
    component: ReactNode,
    options?: CustomToastOptions,
  ) {
    const { addToast } = useToastStore.getState();
    addToast({
      message: '', // Empty message since we're using custom component
      variant: 'custom',
      duration: options?.duration ?? 5000,
      action: options?.action,
      customComponent: component,
    });
  },
  dismiss() {
    const { clearToasts } = useToastStore.getState();
    clearToasts();
  },
};
