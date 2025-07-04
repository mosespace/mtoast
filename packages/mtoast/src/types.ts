import { ReactNode } from 'react';

export type ToastVariant =
  | 'success'
  | 'error'
  | 'information'
  | 'warning'
  | 'discovery'
  | 'loading'
  | 'custom';

export interface ToastData {
  id: string;
  title?: string;
  message: string;
  variant: ToastVariant;
  duration?: number;
  customComponent?: ReactNode;
}
