import { Card } from '@/components/ui/card';

export function VideoPlayer({ videoUrl }) {
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
    <Card className="w-full h-full min-h-[600px] backdrop-blur-sm bg-white/50 dark:bg-gray-900/50 overflow-hidden">
      <video
        src={videoUrl}
        controls
        className="w-full h-full object-cover"
      >
        Your browser does not support the video tag.
      </video>
    </Card>
  );
}