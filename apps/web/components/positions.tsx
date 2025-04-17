import React from 'react';
import { Button } from './ui/button';
import { toast, Toaster } from '@mosespace/toast';

interface IProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  toastProp: 'success' | 'error' | 'information' | 'warning';
  toastTitle: string;
  toastMessage: string;
}

export default function Position({
  position,
  toastProp,
  toastTitle,
  toastMessage,
}: IProps) {
  return (
    <>
      <Button
        onClick={() => toast[toastProp](toastTitle, toastMessage)}
        variant="outline"
      >
        {position}
      </Button>
      <Toaster position={position} />
    </>
  );
}
