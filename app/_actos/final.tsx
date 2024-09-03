"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { texto1b, texto2b, texto3b, texto4b } from "@/animaciones";
import Link from "next/link";

interface Props {
  windowWidth: number;
  imageWidth: number;
  windowHeight: number;
}

// const WhatsAppButton = () => {
//   const tuNumero = "9841510300"; // Reemplaza con tu número de teléfono
//   const mensaje = "Hola, estaré encantado de acompañarlos a celebrar a Isabellita."; // Reemplaza con el mensaje que deseas enviar
//   return `https://wa.me/${tuNumero}?text=${encodeURIComponent(mensaje)}`;
// };

const Final = ({ windowWidth, imageWidth, windowHeight }: Props) => {
  return (
    <section className="w-full md:hidden h-screen  flex flex-col items-center justify-center relative overflow-hidden snap-start flex-none bg-purple-200">
      <div className="w-full p-2 absolute top-10 z-20" style={{ height: windowHeight / 2 }}>
        <motion.div initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={texto1b} className="relative z-20 mb-3">
          <Image src="/vemos.png" width={imageWidth} height={imageWidth} alt="estas" className="mx-auto" />
        </motion.div>
        <motion.div initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={texto2b} className="relative z-20 mb-3">
          <Image src="/viernes.png" width={imageWidth} height={imageWidth} alt="estas" className="mx-auto" />
          <Image src="/sep.png" width={imageWidth / 1.8} height={imageWidth} alt="estas" className="mx-auto" />
        </motion.div>
        <motion.div initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={texto3b} className="relative z-20">
          <Image src="/escuelita.png" width={imageWidth / 1.4} height={imageWidth * 1.4} alt="estas" className="mx-auto" />
          <Image src="/lunch.png" width={imageWidth} height={imageWidth} alt="estas" className="mx-auto" />
        </motion.div>
        <motion.div className="flex flex-col items-center justify-around p-4 mt-5 gap-2" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={texto4b}>
          <Image src="/no-lunch.png" width={imageWidth / 1.2} height={imageWidth} alt="estas" className="mx-auto" />
        </motion.div>
      </div>
      <div className="bg-cover bg-center w-full h-full absolute top-0 z-10 bg-black" style={{ backgroundImage: `url('/bg-final.jpg')` }}></div>
    </section>
  );
};

export default Final;
