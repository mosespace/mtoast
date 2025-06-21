'use client';

import { toast, Toaster } from '@mosespace/toast';
import { useState } from 'react';
import { Button } from './ui/button';

interface IProps {
  position:
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'top-center';
  toastProp: 'success' | 'error' | 'information' | 'warning';
  toastTitle: string;
  toastMessage: string;
  onPositionChange: (
    position:
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right'
      | 'bottom-center'
      | 'top-center',
  ) => void;
}

export function Position({
  position,
  toastProp,
  toastTitle,
  toastMessage,
  onPositionChange,
}: IProps) {
  const handleClick = () => {
    toast.dismiss();
    onPositionChange(position); // Set the position first
    setTimeout(() => {
      toast[toastProp](toastTitle, toastMessage);
    }, 100); // Small delay to ensure position is updated
  };

  return (
    <Button onClick={handleClick} variant="outline">
      {position}
    </Button>
  );
}

export default function Positions() {
  const [currentPosition, setCurrentPosition] = useState<
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'top-center'
  >('top-right');

  return (
    <div>
      <div className="mt-16 container max-w-4xl mx-auto">
        <h3 className="mb-6 text-center text-2xl font-bold">Positions</h3>
        <div className="grid grid-cols-2 gap-4">
          <Position
            toastProp="success"
            position="top-left"
            toastTitle="Position: Top left"
            toastMessage="Toast notifications can appear in different positions"
            onPositionChange={setCurrentPosition}
          />
          <Position
            toastProp="information"
            position="top-right"
            toastTitle="Position: Top right"
            toastMessage="Toast notifications can appear in different positions"
            onPositionChange={setCurrentPosition}
          />
          <Position
            toastProp="warning"
            position="bottom-left"
            toastTitle="Position: Bottom left"
            toastMessage="Toast notifications can appear in different positions"
            onPositionChange={setCurrentPosition}
          />
          <Position
            toastProp="warning"
            position="bottom-right"
            toastTitle="Position: Bottom right"
            toastMessage="Toast notifications can appear in different positions"
            onPositionChange={setCurrentPosition}
          />
          <Position
            toastProp="warning"
            position="bottom-center"
            toastTitle="Position: Bottom center"
            toastMessage="Toast notifications can appear in different positions"
            onPositionChange={setCurrentPosition}
          />
          <Position
            toastProp="warning"
            position="top-center"
            toastTitle="Position: Top center"
            toastMessage="Toast notifications can appear in different positions"
            onPositionChange={setCurrentPosition}
          />
        </div>

        {/* Single Toaster that changes position */}
        <Toaster position={currentPosition} />
      </div>
    </div>
  );
}
