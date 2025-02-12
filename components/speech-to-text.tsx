'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useSpeechToText } from '@/components/use-speech-to-text';
import { Mic, Pause, Play, StopCircle } from 'lucide-react';

export default function SpeechToText() {
  const {
    isListening,
    isPaused,
    transcript,
    startListening,
    pauseListening,
    resumeListening,
    stopListening,
  } = useSpeechToText();

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="mb-6 flex justify-center gap-4">
          {!isListening ? (
            <Button
              onClick={startListening}
              className="bg-primary hover:bg-primary/90">
              <Mic className="mr-2 h-4 w-4" />
              Start Recording
            </Button>
          ) : (
            <>
              {!isPaused ? (
                <Button
                  onClick={pauseListening}
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-500/10">
                  <Pause className="mr-2 h-4 w-4" />
                  Pause
                </Button>
              ) : (
                <Button
                  onClick={resumeListening}
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-500/10">
                  <Play className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              )}
              <Button onClick={stopListening} variant="destructive">
                <StopCircle className="mr-2 h-4 w-4" />
                Stop
              </Button>
            </>
          )}
        </div>
        <div className="relative">
          <div className="absolute right-3 top-3">
            {isListening && !isPaused && (
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                <span className="text-sm text-muted-foreground">
                  Recording...
                </span>
              </div>
            )}
          </div>
          <textarea
            className="h-64 w-full resize-none rounded-md bg-muted/50 p-4 focus:outline-none focus:ring-2 focus:ring-primary"
            value={transcript}
            readOnly
            placeholder="Your speech will appear here..."
          />
        </div>
      </Card>

      <div className="text-center text-sm text-muted-foreground">
        <p>Click the microphone button to start recording your speech.</p>
        <p>
          Make sure your microphone is connected and you&apos;ve granted browser
          permissions.
        </p>
      </div>
    </div>
  );
}
