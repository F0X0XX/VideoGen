import { cn } from '@/lib/utils';
import localImage from '@/files/images/keith-misner-h0Vxgz5tyXA-unsplash.jpg'; // Update the path to your local image

interface BackgroundProps {
  className?: string;
}

export function Background({ className }: BackgroundProps) {
  return (
    <div className={cn("fixed inset-0 -z-10", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      <div className={`absolute inset-0 bg-[url('${localImage}')] opacity-30 bg-repeat`} /> {/* Adjusted opacity */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
    </div>
  );
}