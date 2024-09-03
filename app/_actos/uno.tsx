"use client";
import { F1, F2, texto1, texto2, texto3, texto4, texto5 } from "@/animaciones";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Uno = () => {
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
    <section className="w-full md:hidden h-svh bg-[#4e2a74ff] flex flex-col items-center justify-center relative overflow-hidden pt-[15rem] snap-start flex-none">
      <Image src="/bg1.jpg" width={windowWidth * 1.5} height={windowWidth * 1.5} alt="22" className=" absolute z-10 top-0 left-0" />

      <div className="flex items-center justify-center flex-col z-50">
        <motion.div initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={texto1}>
          <Image src="/festeja.png" width={imageWidth} height={1} alt="estas" />
        </motion.div>
        <motion.div initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={texto2}>
          <Image src="/conmigo.png" width={imageWidth * 1} height={1} alt="estas" />
        </motion.div>
        <motion.div initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={texto3} className="flex items-center gap2">
          <Image src="/cumpleaños.png" width={imageWidth * 1} height={1} alt="estas" />
        </motion.div>
        {/* <motion.div initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={texto4}>
          <Image src="/de.png" width={imageWidth * 0.3} height={1} alt="estas" />
        </motion.div> */}
        <motion.div initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={texto5}>
          <Image src="/inside.webp" width={imageWidth * 1} height={imageWidth * 1.3} alt="estas" />
        </motion.div>
      </div>
      {/* <div className="flex w-full items-center justify-center z-50">
        <motion.div className="absolute " style={{ right: (imageWidth / 2) * -1, bottom: (imageWidth / 2) * -1 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F1} animate="rotate">
          <Image src="/flores/flor4.png" width={imageWidth} height={imageWidth} alt="flor1" />
        </motion.div>
        <motion.div className="absolute " style={{ left: (imageWidth / 2) * -1, bottom: (imageWidth / 2) * -1 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F1} animate="rotate">
          <Image src="/flores/flor6.png" width={imageWidth} height={imageWidth} alt="flor1" />
        </motion.div>
        <motion.div className="absolute -bottom-6" style={{ left: imageWidth / 3 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F2} animate="rotate">
          <Image src="/flores/rosa1.png" width={imageWidth / 2} height={imageWidth / 2} alt="flor1" />
        </motion.div>
        <motion.div className="absolute -bottom-6" style={{ right: imageWidth / 3 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F2} animate="rotate">
          <Image src="/flores/flor2.png" width={imageWidth / 2} height={imageWidth / 2} alt="flor1" />
        </motion.div>
        <motion.div className="absolute -bottom-20" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F1} animate="rotate">
          <Image src="/flores/flor5.png" width={imageWidth} height={imageWidth} alt="flor1" onClick={() => console.log(imageWidth)} />
        </motion.div>
        <motion.div className="absolute bottom-10 right-8" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F1} animate="rotate">
          <Image src="/flores/blanca.png" width={imageWidth * 0.3} height={imageWidth * 0.3} alt="flor1" onClick={() => console.log(imageWidth)} />
        </motion.div>
        <motion.div className="absolute bottom-14 right-20" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F1} animate="rotate">
          <Image src="/flores/blanca.png" width={imageWidth * 0.2} height={imageWidth * 0.2} alt="flor1" onClick={() => console.log(imageWidth)} />
        </motion.div>
        <motion.div className="absolute bottom-16 right-1" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F1} animate="rotate">
          <Image src="/flores/blanca.png" width={imageWidth * 0.19} height={imageWidth * 0.19} alt="flor1" onClick={() => console.log(imageWidth)} />
        </motion.div>
        <motion.div className="absolute bottom-10 left-8" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F1} animate="rotate">
          <Image src="/flores/blanca.png" width={imageWidth * 0.3} height={imageWidth * 0.3} alt="flor1" onClick={() => console.log(imageWidth)} />
        </motion.div>
        <motion.div className="absolute bottom-14 left-20" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F1} animate="rotate">
          <Image src="/flores/blanca.png" width={imageWidth * 0.2} height={imageWidth * 0.2} alt="flor1" onClick={() => console.log(imageWidth)} />
        </motion.div>
        <motion.div className="absolute bottom-16 left-1" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F1} animate="rotate">
          <Image src="/flores/blanca.png" width={imageWidth * 0.19} height={imageWidth * 0.19} alt="flor1" onClick={() => console.log(imageWidth)} />
        </motion.div>
      </div> */}
      <div className="absolute z-50">
        {/* <p className="text-3xl text-center">
          {frase1?.split("").map((letra, i) => (
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
        <p className="text-3xl text-center">
          {nombre?.split("").map((letra, i) => (
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ opacity: 0, scale: 4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 2 + i / 8,
                type: "spring",
                bounce: 0.4,
              }}
              key={i}
            >
              {letra}
            </motion.span>
          ))}
        </p>
        <p className="text-3xl text-center">
          {frasePlural?.split("").map((letra, i) => (
            <motion.span
              style={{ display: "inline-block" }}
              initial={{ opacity: 0, scale: 4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.5,
                delay: 2 + i / 8,
                type: "spring",
                bounce: 0.4,
              }}
              key={i}
            >
              {letra}
            </motion.span>
          ))}
        </p> */}
      </div>
    </section>
  );
};

export default Uno;
