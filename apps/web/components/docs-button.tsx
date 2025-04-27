'use client';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DocsButton = () => {
  const currentPath = usePathname();
  if (currentPath.includes('/docs')) {
    return null;
  }
  return (
    <Link
      href={'/docs'}
      prefetch={true}
      className="fixed bottom-[30px] right-[30px] z-30 flex justify-center items-center w-[60px] h-[60px] bg-amber-500 rounded-full"
    >
      <FileText size={28} color="white" />
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500/70 opacity-75"></span>
    </Link>
  );
};

export default DocsButton;
