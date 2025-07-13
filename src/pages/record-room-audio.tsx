import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

type RoomParams = {
  id: string;
};

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof window.MediaRecorder === 'function';

export function RecordRoomAudio() {
  const params = useParams<RoomParams>();

  const [isRecording, setIsRecording] = useState(false);
  const recorder = useRef<MediaRecorder | null>(null);

  function stopRecording() {
    setIsRecording(false);

    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current.stop();
    }
  }

  async function uploadAudio(audio: Blob) {
    const formData = new FormData();
    formData.append('file', audio, 'audio.webm');

    const response = await fetch(
      `http://localhost:3333/rooms/${params.id}/audio`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const result = await response.json();
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert('Gravação de áudio não suportada');
      return;
    }

    setIsRecording(true);

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });

    recorder.current = new MediaRecorder(audio, {
      mimeType: 'audio/webm;',
      audioBitsPerSecond: 164_000,
    });

    recorder.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        uploadAudio(event.data);
      }
    };

    recorder.current.onstart = () => {
      // biome-ignore lint/suspicious/noConsole: testes
      console.log('Gravação iniciada');
    };

    recorder.current.onstop = () => {
      // biome-ignore lint/suspicious/noConsole: testes
      console.log('Gravação finalizada');
    };

    recorder.current.start();
  }

  if (!params.id) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording}>Parar gravação</Button>
      ) : (
        <Button onClick={startRecording}>Gravar áudio</Button>
      )}
    </div>
  );
}
