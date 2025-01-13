import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { VideoIcon, Music, Palette, User2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoPromptFormProps {
  onSubmit: (promptData: PromptData) => void;
  isLoading: boolean;
}

export interface PromptData {
  character: string;
  environment: string;
  music: string;
  genre: string;
  additionalDetails: string;
}

export function VideoPromptForm({ onSubmit, isLoading }: VideoPromptFormProps) {
  const [promptData, setPromptData] = useState<PromptData>({
    character: '',
    environment: '',
    music: '',
    genre: '',
    additionalDetails: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(promptData);
  };

  const updateField = (field: keyof PromptData, value: string) => {
    setPromptData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <User2 className="w-5 h-5 text-primary" />
              <Label htmlFor="character">Character</Label>
            </div>
            <Input
              id="character"
              placeholder="Describe your main character..."
              value={promptData.character}
              onChange={(e) => updateField('character', e.target.value)}
              className="h-20"
            />
          </div>
        </Card>

        <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Palette className="w-5 h-5 text-primary" />
              <Label htmlFor="environment">Environment</Label>
            </div>
            <Input
              id="environment"
              placeholder="Describe the setting and atmosphere..."
              value={promptData.environment}
              onChange={(e) => updateField('environment', e.target.value)}
              className="h-20"
            />
          </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Music className="w-5 h-5 text-primary" />
                <Label htmlFor="music">Music Style</Label>
              </div>
              <Select
                value={promptData.music}
                onValueChange={(value) => updateField('music', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select music style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="epic">Epic Orchestral</SelectItem>
                  <SelectItem value="ambient">Ambient</SelectItem>
                  <SelectItem value="electronic">Electronic</SelectItem>
                  <SelectItem value="rock">Rock</SelectItem>
                  <SelectItem value="jazz">Jazz</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <VideoIcon className="w-5 h-5 text-primary" />
                <Label htmlFor="genre">Genre</Label>
              </div>
              <Select
                value={promptData.genre}
                onValueChange={(value) => updateField('genre', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fantasy">Fantasy</SelectItem>
                  <SelectItem value="scifi">Sci-Fi</SelectItem>
                  <SelectItem value="horror">Horror</SelectItem>
                  <SelectItem value="drama">Drama</SelectItem>
                  <SelectItem value="comedy">Comedy</SelectItem>
                </SelectContent>
              </Select>
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