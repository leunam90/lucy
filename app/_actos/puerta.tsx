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
    <section className="snap-start w-full flex-none bg-cover bg-center flex items-center justify-center overflow-hidden" style={{ height: altura, backgroundImage: `url('/puerta.jpg')` }}>
      <button onClick={playAudio} className="bg-white/20 rounded-full border-2 border-white/50 p-4 w-24 h-24">
        Entrar
      </button>
      <audio ref={audioRef} src="/cancion.mp3" />
    </section>
  );
};

export default Puerta;
