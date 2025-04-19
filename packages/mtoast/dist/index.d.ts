import * as react_jsx_runtime from 'react/jsx-runtime';

interface ToasterProps {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    gap?: number;
}
declare function Toaster({ position, gap }: ToasterProps): react_jsx_runtime.JSX.Element;

interface ToastOptions {
    duration?: number;
}
declare const toast: {
    success(title: string, message: string, options?: ToastOptions): void;
    error(title: string, message: string, options?: ToastOptions): void;
    information(title: string, message: string, options?: ToastOptions): void;
    warning(title: string, message: string, options?: ToastOptions): void;
    discovery(title: string, message: string, options?: ToastOptions): void;
};

export { Toaster, type ToasterProps, toast };
