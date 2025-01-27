export type ToastVariant =
  | 'success'
  | 'error'
  | 'information'
  | 'warning'
  | 'discovery';

export interface ToastData {
  id: string;
  title: string;
  message: string;
  variant: ToastVariant;
  duration?: number;
}
