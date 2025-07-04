'use client';

import { Button } from '@/components/ui/button';
import { toast } from '@mosespace/toast';
import {
  AlertCircle,
  Bell,
  CheckCircle,
  Info,
  Laugh,
  Loader2,
  Map,
  Sparkles,
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
    name: 'Custom Toast',
    icon: <Laugh className="h-5 w-5 text-amber-500" />,
    action: () => 
      toast.custom(
        <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg text-white">
          <div className="flex-shrink-0">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold">Custom Toast!</h3>
            <p className="text-sm opacity-90">This is a completely custom toast component with your own styling and layout!</p>
          </div>
        </div>,
        { duration: 6000 }
      ),
  },
  {
    name: 'Simple Action',
    icon: <Map className="h-5 w-5 text-teal-500" />,
    action: () =>
      toast.success('File uploaded', {
        action: {
          label: 'View',
          onClick: () => console.log('View clicked'),
        },
      }),
  },
  {
    name: 'Advanced Action',
    icon: <Sparkles className="h-5 w-5 text-purple-500" />,
    action: () =>
      toast.information('New Feature', 'Check out our latest update', {
        action: {
          label: 'Learn More',
          onClick: () => window.open('/features'),
        },
      }),
  },
  {
    name: 'Advanced Custom',
    icon: <Sparkles className="h-5 w-5 text-indigo-500" />,
    action: () =>
      toast.custom(
        <div className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-w-md">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white">File Uploaded Successfully!</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Your document has been uploaded and is ready for processing.
            </p>
            <div className="mt-3 flex space-x-2">
              <button className="px-3 py-1.5 bg-blue-500 text-white text-xs font-medium rounded-md hover:bg-blue-600 transition-colors">
                View File
              </button>
              <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Share
              </button>
            </div>
          </div>
        </div>,
        { duration: 8000 }
      ),
  },
  {
    name: 'Loading',
    icon: <Loader2 className="h-5 w-5 animate-spin" />,
    action: () => {
      // const toastId = toast({
      //   title: 'Loading...',
      //   description: 'Please wait while we process your request',
      //   variant: 'loading',
      //   duration: Number.POSITIVE_INFINITY,
      // });

      // // Simulate loading
      // setTimeout(() => {
      //   toast.update(toastId, {
      //     title: 'Completed!',
      //     description: 'Your request has been processed',
      //     variant: 'success',
      //     duration: 5000,
      //   });
      // }, 3000);
      toast.loading('Please wait', 'We are processing your request...');
    },
  },
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
      </div>
    </section>
  );
}
