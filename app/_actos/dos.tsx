"use client";
import { motion } from "framer-motion";
import FlorUno from "../flores/FlorUno";
import Image from "next/image";
import { F1, F2, F3 } from "@/animaciones";
import { useEffect, useState } from "react";

interface Props {
  sujeto?: string;
  nombre?: string;
  fraseSingular?: string;
  frasePlural?: string;
  plural?: boolean;
}

const animacion2 = {
  offScreen: { y: -100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 360, 0],
    transition: { duration: 2, type: "spring", bounce: 0.4 },
  },
};

const Dos = ({ sujeto, nombre, fraseSingular, frasePlural, plural = false }: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initialize the window width
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Calculate the image width as 30% of the window width
    setImageWidth(windowWidth * 0.5);
  }, [windowWidth]);

  return (
    <section className="md:hidden w-full h-svh bg-[#4e2a74ff] flex flex-col items-center justify-center relative overflow-hidden snap-start">
      <motion.div className="text-2xl" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={animacion2}>
        Hola, {sujeto}
      </motion.div>
      <motion.h2 className="text-3xl" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={animacion2}>
        {nombre}
      </motion.h2>
      <p className="text-3xl text-center">
        {nombre?.split("").map((letra, i) => (
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, scale: 4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: i / 8,
              type: "spring",
              bounce: 0.4,
            }}
            key={i}
          >
            {letra}
          </motion.span>
        ))}
      </p>
      <div className="w-full bg-red-500/50 absolute  h-full flex items-center justify-center overflow-hidden">
        <motion.div className="absolute " style={{ right: (imageWidth / 2) * -1, bottom: (imageWidth / 2) * -1 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F1} animate="rotate">
          <Image src="/flores/flor4.png" width={imageWidth} height={imageWidth} alt="flor1" />
        </motion.div>
        <motion.div className="absolute " style={{ left: (imageWidth / 2) * -1, bottom: (imageWidth / 2) * -1 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F1} animate="rotate">
          <Image src="/flores/flor6.png" width={imageWidth} height={imageWidth} alt="flor1" />
        </motion.div>
        <motion.div className="absolute -bottom-6" style={{ left: imageWidth / 3 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F2} animate="rotate">
          <Image src="/flores/flor3.png" width={imageWidth / 2} height={imageWidth / 2} alt="flor1" />
        </motion.div>
        <motion.div className="absolute -bottom-6" style={{ right: imageWidth / 3 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F2} animate="rotate">
          <Image src="/flores/flor2.png" width={imageWidth / 2} height={imageWidth / 2} alt="flor1" />
        </motion.div>

        <motion.div className="absolute -bottom-20" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F1} animate="rotate">
          <Image src="/flores/flor1.png" width={imageWidth} height={imageWidth} alt="flor1" onClick={() => console.log(imageWidth)} />
        </motion.div>
      </div>
    </section>
  );
};

export default Dos;
