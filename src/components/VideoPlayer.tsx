import { Card } from '@/components/ui/card';

interface VideoPlayerProps {
  videoUrl: string | null;
}

export function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  if (!videoUrl) {
    return (
      <Card className="w-full h-full min-h-[600px] backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 flex items-center justify-center">
        <p className="text-muted-foreground text-lg">
          Your generated video will appear here
        </p>
      </Card>
    );
  }

  return (
    <Card className="w-full h-full min-h-[600px] max-h-[600px] backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 overflow-hidden">
      <div className="w-full h-[600px] overflow-hidden relative">  {/* Set a fixed height for the container */}
        <video
          src={videoUrl}
          controls
          className="absolute top-0 left-0 w-full h-full max-h-[600px] object-cover"  // Use absolute positioning
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </Card>
  );
}