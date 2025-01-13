import { Wand2 } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center space-y-2 mb-8">
      <div className="flex items-center justify-center space-x-2">
        <Wand2 className="w-8 h-8 text-primary" />
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
          Video Generator
        </h1>
      </div>
      <p className="text-muted-foreground">
        Create unique videos by describing your vision
      </p>
    </div>
  );
}