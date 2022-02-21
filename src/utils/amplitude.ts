import { AmplitudeClient } from 'amplitude-js';
import { useEffect } from 'react';

let amplitudeInstance: AmplitudeClient | null = null;

export const useInitAmplitude = ({ onInit }: { onInit(): void }) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      import('amplitude-js')
        .then((ampPackage) => {
          amplitudeInstance = ampPackage.getInstance();
          amplitudeInstance.init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY as string);
          onInit();
        })
        .catch(() => null);
    }
  }, []);
};

export const sendAmplitudeData = (event: string, eventProperties?: unknown) => {
  if (amplitudeInstance == null) {
    return;
  }
  amplitudeInstance.logEvent(event, eventProperties);
};
