import { Wand2 } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center space-y-2 mb-[200px]" style={{ marginBottom: '70px', marginTop:'20px'}}>
      <div className="flex items-center justify-center space-x-2">
        <Wand2 className="w-8 h-8 text-white" />
        <h1 className="text-4xl font-bold text-white">
          Video Generator
        </h1>
      </div>
      <p className="text-gray-300">
        Create unique videos by describing your vision
      </p>
    </div>
  );
}