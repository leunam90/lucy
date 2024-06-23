"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const animacion = {
  offScreen: { y: 200, opacity: 0, scale: 0.2 },
  onScreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 4, type: "spring", bounce: 0.6 },
  },
  rotate: {
    rotate: [0, 360],
    transition: { repeat: Infinity, duration: 10, ease: "linear" },
  },
};

const FlorUno = () => {
  return (
    <div className="flex items-center gap-3">
      <motion.div initial={"offScreen"} whileInView={"onScreen"} animate={"rotate"} viewport={{ once: false, amount: 0.5 }} variants={animacion}>
        <Image src="/flores/flor1.png" width={200} height={400} alt="flor" />
      </motion.div>
    </div>
  );
};

export default FlorUno;
