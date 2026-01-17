"use client";
import { useRef, useState } from "react";
import { processVoice } from "../actions/Voice";

export default function VoiceRecorder() {
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const fileInputRef = useRef(null);
  const streamRef = useRef(null);

  const [isRecording, setIsRecording] = useState(false);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    streamRef.current = stream;

    mediaRecorderRef.current = new MediaRecorder(stream);
    audioChunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = (e) => {
      audioChunksRef.current.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, {
        type: "audio/webm",
      });

      const audioFile = new File([audioBlob], "voice.webm", {
        type: "audio/webm",
      });

      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(audioFile);
      fileInputRef.current.files = dataTransfer.files;

      streamRef.current.getTracks().forEach((t) => t.stop());
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  return (
    <form action={processVoice} className="flex flex-col gap-4">
      {/* REAL FILE FIELD */}
      <input
        ref={fileInputRef}
        type="file"
        name="audio"
        hidden
        accept="audio/*"
      />

      {!isRecording ? (
        <button type="button" onClick={startRecording}>
          Start Recording
        </button>
      ) : (
        <button type="button" onClick={stopRecording}>
          Stop Recording
        </button>
      )}

      <button type="submit">Submit Audio</button>
    </form>
  );
}
