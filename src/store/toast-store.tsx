import { create } from 'zustand';

export type ToastVariant =
  | 'success'
  | 'error'
  | 'information'
  | 'warning'
  | 'discovery';

export interface Toast {
  id: string;
  title: string;
  message: string;
  variant: ToastVariant;
  duration?: number;
}

interface ToastStore {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) =>
    set((state) => ({
      toasts: [
        ...state.toasts,
        { ...toast, id: Math.random().toString(36).slice(2) },
      ],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));
