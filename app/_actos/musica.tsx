"use client";
import React, { useEffect, useRef } from "react";

const AutoPlayAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return <audio ref={audioRef} src="/cancion.mp3" />;
};

export default AutoPlayAudio;
