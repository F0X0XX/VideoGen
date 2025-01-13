import { useState } from 'react';
import { VideoPromptForm } from '@/components/VideoPromptForm';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Header } from '@/components/Layout/Header';
import backgroundImage from '@/files/images/annie-spratt-xTaOPMa6wAE-unsplash.jpg';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);


  async function handleSubmit(promptData: { genre: string; music: string; character: string; environment: string }) {
    setIsLoading(true);
    let taskId: string | null = null;

    try {
        // Send request to generate music
        console.log(`Genre: ${promptData.genre}, Description: ${promptData.music}`);
        const response = await fetch("https://n2xp1bqnq2hsv7-8000.proxy.runpod.net/generate-music/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                text: `Genre: ${promptData.genre}, Description: ${promptData.music}`,
                character: promptData.character,
                environment: promptData.environment,
            }),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json(); // Read the response body once
        taskId = data.task_id;

        let statusResponse;
        let statusData; // Declare statusData here
        do {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            statusResponse = await fetch(`https://n2xp1bqnq2hsv7-8000.proxy.runpod.net/status/${taskId}`);
            statusData = await statusResponse.json(); // Read the status response body
            if (statusData.status === "completed") {
                setVideoUrl(`https://n2xp1bqnq2hsv7-8000.proxy.runpod.net/download/${taskId}`);
            } else {
                console.error("Task did not complete successfully:", statusData);
            }
        } while (statusResponse.status === 200 && statusData.status === "processing"); // Use statusData here

    } catch (error) {
        console.error('Error generating video:', error);
    } finally {
        setIsLoading(false);
    }
}
  return (
    <div className='w-100% max-h-100% overflow-hidden'>
      <div 
        className="min-h-screen p-4 md:p-8" 
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Header />
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:order-1">
              <VideoPromptForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
            <div className="lg:order-2 sticky top-8 max-h-[760px]">
              <VideoPlayer videoUrl={videoUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;