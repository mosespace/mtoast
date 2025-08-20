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
        <div className="flex items-center space-x-3 p-4 bg-amber-500 rounded-lg shadow-lg text-white max-w-md">
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
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
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
      <div className="container max-w-4xl mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
          Toast Examples
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {examples.map((example, index) => (
            <Button
              key={index}
              variant="outline"
              className="group relative flex h-auto min-w-[180px] max-w-[280px] flex-col gap-3 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200/50 bg-gradient-to-br from-white/80 via-gray-50/50 to-white/80 backdrop-blur-sm hover:from-white hover:via-gray-50 hover:to-white hover:border-gray-300/70 dark:from-gray-900/80 dark:via-gray-800/50 dark:to-gray-900/80 dark:border-gray-700/50 dark:hover:from-gray-900 dark:hover:via-gray-800 dark:hover:to-gray-900 dark:hover:border-gray-600/70"
              onClick={example.action}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-300 dark:from-gray-700 dark:to-gray-800">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                {example.icon}
              </div>
              <span className="relative font-medium text-gray-700 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-100 transition-colors duration-300">
                {example.name}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
