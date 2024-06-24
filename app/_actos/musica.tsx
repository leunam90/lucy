"use client";
import React, { useRef } from "react";

const PlayAudioButton = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <button onClick={playAudio} className="bg-red-700 p-4">
        Reproducir audio
      </button>
      <audio ref={audioRef} src="/cancion.mp3" />
    </>
  );
};

export default PlayAudioButton;
