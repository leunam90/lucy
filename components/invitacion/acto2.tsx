"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ActoDos = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // offset: ["start end", "center"],
    offset: ["start end", "center center"],
  });
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);
  const x = useTransform(scrollYProgress, [0, 1], [700, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [700, 0]);
  return (
    <div className="w-full h-svh bg-red-400 flex flex-col items-center justify-center overflow-hidden">
      <motion.div ref={targetRef} style={{ x, y }} transition={{ type: "spring", bounce: 0.5 }} className="w-36 h-36 bg-amber-400"></motion.div>
    </div>
  );
};

export default ActoDos;
