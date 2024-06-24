import React, { useEffect, useState, useRef } from "react";

interface Props {
  windowWidth: number;
  imageWidth: number;
  windowHeight: number;
}

const Puerta = ({ windowWidth, imageWidth, windowHeight }: Props) => {
  const [altura, setAltura] = useState(windowHeight);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current) {
      setAltura(1);
      audioRef.current.play();
    }
  };
  useEffect(() => {
    // Calculate the image width as 30% of the window width
    setAltura(windowHeight);
  }, [windowHeight]);
  return (
    <section className="md:hidden snap-start w-full flex-none bg-cover bg-center flex items-center justify-center overflow-hidden" style={{ height: altura, backgroundImage: `url('/puerta2.jpg')` }}>
      <button onClick={playAudio} className="bg-white/20 rounded-full border-2 border-white/50 p-4 w-24 h-24 animate-pulse flex items-center justify-center">
        <svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
        </svg>
      </button>
      <audio ref={audioRef} src="/cancion.mp3" />
    </section>
  );
};

export default Puerta;
