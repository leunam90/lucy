"use client";
import { once } from "events";
import { motion } from "framer-motion";

const animacion1 = {
  offScreen: { x: -100, opacitx: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 360, 0],
    transition: { duration: 2, type: "spring", bounce: 0.4 },
  },
};
const animacion2 = {
  offScreen: { y: -100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 360, 0],
    transition: { duration: 2, type: "spring", bounce: 0.4 },
  },
};
const animacion3 = {
  offScreen: { x: 300, opacity: 0 },
  onScreen: {
    x: 0,
    opacity: 1,
    rotate: [0, 360, 0],
    transition: { duration: 2, type: "spring", bounce: 0.4 },
  },
};

const texto = "Este es un texto de prueba ALV".split("");

const ActoTres = () => {
  return (
    <div className="w-full h-svh bg-teal-400 flex flex-row gap-2 items-center justify-center overflow-hidden">
      {/* <motion.div
        className="w-44 h-44 rounded-xl bg-emerald-400 border border-black"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 150,
            restDelta: 0.001,
          },
        }}
      ></motion.div>
      <motion.div className="w-24 h-24 bg-orange-500 rounded-xl border border-black" initial={"offScreen"} animate={"onScreen"} variants={animacion}></motion.div> */}
      <motion.div className="w-24 h-24 text-4xl font-medium" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={animacion1}>
        I
      </motion.div>
      <motion.div className="w-24 h-24 text-4xl font-medium" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.7 }} variants={animacion2}>
        S
      </motion.div>
      <motion.div className="w-24 h-24 text-4xl font-medium" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.1 }} variants={animacion3}>
        A
      </motion.div>
      {/* <motion.div className="text-3xl font-bold text-black">
        {texto.map((letra, i) => (
          <motion.span
            initial={{ opacity: 0, scale: 4, rotate: 360, x: 200, y: 200 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
            viewport={{ once: false, amount: 1 }}
            transition={{
              duration: 1.5,
              delay: i / 8,
            }}
            key={i}
          >
            {letra}
          </motion.span>
        ))}
      </motion.div> */}
    </div>
  );
};

export default ActoTres;
