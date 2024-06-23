"use client";
import { Gochi_Hand } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

import globo1 from "./imagenes/globo1.png";
import footer1 from "./imagenes/footer1.png";
import nubes from "./imagenes/nubes.png";

const gochi = Gochi_Hand({ subsets: ["latin"], weight: ["400"] });

const ActoUno = () => {
  const saludo = "Hola";
  const invitado = "Eduardo";
  const invitacion = "Estás invitado a celebrar con nosotros".split("");
  return (
    <div className={gochi.className + " w-full h-svh relative bg-[#C2E3FE] flex flex-col items-center justify-center overflow-hidden"}>
      <motion.h1 className=" text-6xl text-[#5A5A87]/90" animate={{ opacity: [0, 1], y: [20, 0] }} transition={{ duration: 1, ease: "easeInOut" }}>
        {saludo}
      </motion.h1>
      <motion.h2 className=" text-8xl text-center text-[#5A5A87]" animate={{ opacity: [0, 1], y: [20, 0] }} transition={{ duration: 1, ease: "easeInOut", delay: 1 }}>
        {invitado}
      </motion.h2>
      <p className="text-3xl text-[#5A5A87]/90 text-center">
        {invitacion.map((letra, i) => (
          <motion.span
            initial={{ opacity: 0, scale: 4, rotate: 360 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
            transition={{
              duration: 1.5,
              delay: i / 8,
            }}
            key={i}
          >
            {letra}
          </motion.span>
        ))}
      </p>
      <motion.div
        className="w-24"
        animate={{
          rotate: [0, 13, -23, 2, -20, 0],
          // y: [1000, 0, 0, 0, 0, 0],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          // times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <motion.div
          animate={{
            scale: [5, 1.03, 1, 1.04, 1, 1],
            y: [500, 0, 0, 0, 0, 0, 10],
            x: [-600, 0],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: 0,
          }}
        >
          <Image src={globo1} alt="globo1" />
        </motion.div>
      </motion.div>
      <Image src={nubes} className="absolute scale-150 md:scale-100" alt="nubes" />
      <Image src={footer1} className="absolute bottom-12 md:bottom-0 scale-[4] md:scale-100" alt="footer" />
    </div>
  );
};

export default ActoUno;
