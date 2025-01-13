import { useState } from 'react';
import { VideoPromptForm } from '@/components/VideoPromptForm';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Background } from '@/components/Layout/Background';
import { Header } from '@/components/Layout/Header';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleSubmit = async (promptData) => {
    setIsLoading(true);
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            videoUrl: 'https://example.com/generated-video.mp4',
          });
        }, 2000);
      });
      
      setVideoUrl(response.videoUrl);
    } catch (error) {
      console.error('Error generating video:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Background />
      <div className="min-h-screen p-4 md:p-8">
        <Header />
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* <div className="lg:order-1">
              <VideoPromptForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div> */}
            {/* <div className="lg:order-2 sticky top-8">
              <VideoPlayer videoUrl={videoUrl} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;