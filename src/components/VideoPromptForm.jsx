import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { VideoIcon, Music, Palette, User2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function VideoPromptForm({ onSubmit, isLoading }) {
  const [promptData, setPromptData] = useState({
    character: '',
    environment: '',
    music: '',
    genre: '',
    additionalDetails: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(promptData);
  };

  const updateField = (field, value) => {
    setPromptData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50s rounded-xl">
      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <User2 className="w-5 h-5 text-primary" />
              <Label htmlFor="character">Character</Label>
            </div>
            <Select
              id="character"
              value={promptData.character}
              onValueChange={(value) => updateField('character', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your main character" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Cuzzin Howie">Cuzzin Howie</SelectItem>
                <SelectItem value="Ostrich">Ostrich</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Palette className="w-5 h-5 text-primary" />
              <Label htmlFor="environment">Environment</Label>
            </div>
            <Select
              id="environment"
              value={promptData.environment}
              onValueChange={(value) => updateField('environment', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select the environment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Country Town">Country Town</SelectItem>
                <SelectItem value="City Sky">City Sky</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <VideoIcon className="w-5 h-5 text-primary" />
                <Label htmlFor="musicGenre">Music Genre</Label>
              </div>
              <Select
                value={promptData.genre}
                onValueChange={(value) => updateField('genre', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select music genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pop">Pop</SelectItem>
                  <SelectItem value="rock">Rock</SelectItem>
                  <SelectItem value="jazz">Jazz</SelectItem>
                  <SelectItem value="classical">Classical</SelectItem>
                  <SelectItem value="hiphop">Hip-Hop</SelectItem>
                  <SelectItem value="electronic">Electronic</SelectItem>
                  <SelectItem value="country">Country</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Music className="w-5 h-5 text-primary" />
                <Label htmlFor="music">Music Content</Label>
              </div>
              <Textarea
                id="music"
                placeholder="Describe the music, mood, and audio elements..."
                value={promptData.music}
                onChange={(e) => updateField('music', e.target.value)}
                className="min-h-[80px] resize-none"
              />
            </div>
          </Card>
        </div>

        <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
          <div className="space-y-4">
            <Label htmlFor="additionalDetails">Additional Details</Label>
            <Textarea
              id="additionalDetails"
              placeholder="Any additional details or specific requirements..."
              value={promptData.additionalDetails}
              onChange={(e) => updateField('additionalDetails', e.target.value)}
              className="min-h-[100px]"
            />
          </div>
        </Card>
      </div>

      <Button
        type="submit"
        className={cn(
          "w-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600",
          isLoading && "opacity-50 cursor-not-allowed"
        )}
        disabled={isLoading}
      >
        {isLoading ? "Generating Video..." : "Generate Video"}
      </Button>
    </form>
  );
}