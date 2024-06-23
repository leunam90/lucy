"use client";
import Image from "next/image";
// import "@/css/animaciones.css";
import Sprite from "./Sprite";
import sprites from "/public/familia.png";
console.log("en el padre", sprites.src);

const Botonera = () => {
  return (
    <div className="w-full h-svh bg-orange-400 flex flex-row items-center justify-center overflow-hidden">
      <div className="familia2"></div>
      <div className="border">{sprites.src.length > 0 && <Sprite height={500} width={500} steps={20} imageUrl="https://espanol.bluey.tv/wp-content/themes/bbc-bluey/assets/images/spritesheets/home/home-hero-spritesheet-interaction.png" />}</div>
    </div>
  );
};

export default Botonera;
