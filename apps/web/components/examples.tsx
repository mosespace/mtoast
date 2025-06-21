'use client';
import { Button } from '@/components/ui/button';
import { toast } from '@mosespace/toast';
import {
  AlertCircle,
  Bell,
  CheckCircle,
  Info,
  Laugh,
  XCircle,
} from 'lucide-react';

const examples = [
  {
    name: 'Default',
    icon: <Bell className="h-5 w-5" />,
    action: () => toast.discovery('This is a default toast notification'),
  },
  {
    name: 'Success',
    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    action: () =>
      toast.success('Success!', 'Your action was completed successfully'),
  },
  {
    name: 'Error',
    icon: <XCircle className="h-5 w-5 text-red-500" />,
    action: () =>
      toast.error('Error!', 'There was a problem with your request'),
  },
  {
    name: 'Warning',
    icon: <AlertCircle className="h-5 w-5 text-yellow-500" />,
    action: () => toast.warning('Warning', 'This action might cause issues'),
  },
  {
    name: 'Info',
    icon: <Info className="h-5 w-5 text-blue-500" />,
    action: () =>
      toast.information('Information', "Here's something you should know"),
  },
  {
    name: 'Anything You Want',
    icon: <Laugh className="h-5 w-5 text-amber-500" />,
    action: () => {},
    // toast.information('Information', "Here's something you should know"),
  },
  // {
  //   name: 'With Action',
  //   icon: <Sparkles className="h-5 w-5 text-purple-500" />,
  //   action: () =>
  //     toast({
  //       title: 'New Feature',
  //       description: 'Check out our latest update',
  //       action: {
  //         label: 'View',
  //         onClick: () => console.log('Action clicked'),
  //       },
  //     }),
  // },
  // {
  //   name: 'Loading',
  //   icon: <Loader2 className="h-5 w-5 animate-spin" />,
  //   action: () => {
  //     const toastId = toast({
  //       title: 'Loading...',
  //       description: 'Please wait while we process your request',
  //       variant: 'loading',
  //       duration: Number.POSITIVE_INFINITY,
  //     });

  //     // Simulate loading
  //     setTimeout(() => {
  //       toast.update(toastId, {
  //         title: 'Completed!',
  //         description: 'Your request has been processed',
  //         variant: 'success',
  //         duration: 5000,
  //       });
  //     }, 3000);
  //   },
  // },
  // {
  //   name: 'Custom Duration',
  //   icon: <Clock className="h-5 w-5" />,
  //   action: () =>
  //     toast({
  //       title: 'Quick Toast',
  //       description: 'This toast will disappear in 2 seconds',
  //       duration: 2000,
  //     }),
  // },
];

export default function Examples() {
  return (
    <section className="py-20">
      <div className="container max-w-4xl mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Toast Examples
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {examples.map((example, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex h-auto flex-col gap-2 p-4"
              onClick={example.action}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                {example.icon}
              </div>
              <span>{example.name}</span>
            </Button>
          ))}
        </div>

        {/* <div className="mt-16">
          <h3 className="mb-6 text-center text-2xl font-bold">Positions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Position
              toastProp="success"
              position="top-left"
              toastTitle={`Position: Top left`}
              toastMessage="Toast notifications can appear in different positions"
            />
            <Position
              toastProp="information"
              position="top-right"
              toastTitle={`Position: Top left`}
              toastMessage="Toast notifications can appear in different positions"
            />
            <Position
              toastProp="warning"
              position="bottom-left"
              toastTitle={`Position: Top left`}
              toastMessage="Toast notifications can appear in different positions"
            />
            <Position
              toastProp="warning"
              position="bottom-right"
              toastTitle={`Position: Top left`}
              toastMessage="Toast notifications can appear in different positions"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
