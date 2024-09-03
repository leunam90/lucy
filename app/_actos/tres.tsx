"use client";
import { F1, F1B, F2, F2B, F3B, HIJA, ISABELA, MIRABEL, texto1b, texto2b, texto3b } from "@/animaciones";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  windowWidth: number;
  imageWidth: number;
  windowHeight: number;
}

const Tres = ({ windowWidth, imageWidth, windowHeight }: Props) => {
  return (
    <section className="w-full md:hidden h-svh flex flex-col items-center justify-start relative overflow-hidden snap-start flex-none">
      <div className="w-full bg-cover bg-center h-full absolute top-0 z-10" style={{ backgroundImage: `url('/bg3.png')` }}></div>
      <div className="w-full top-12 absolute z-20" style={{ height: windowWidth }}>
        <motion.div initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={texto1b} className="relative z-20">
          <Image src="/lucy.png" width={imageWidth} height={imageWidth} alt="estas" className="mx-auto" />
        </motion.div>
        <motion.div initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.7 }} variants={texto2b} className="relative z-50">
          <Image src="/cumple.png" width={imageWidth / 1.5} height={imageWidth / 1.5} alt="estas" className="mx-auto" />
        </motion.div>
        <motion.div initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.7 }} variants={texto3b} animate="rotate" className="relative mx-auto z-30" style={{ width: imageWidth / 1.4 }}>
          <Image src="/5.png" width={imageWidth / 1} height={imageWidth / 1.4} alt="estas" className="mx-auto z-50 relative " />
          {/* <motion.div className="absolute z-40 top-0" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F1B} animate="rotate" style={{ left: -imageWidth * 0.1 }}>
            <Image src="/flores/flor5.png" width={imageWidth / 2} height={imageWidth / 2} alt="flor1" />
          </motion.div>
          <motion.div className="absolute z-20" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F3B} animate="rotate" style={{ left: imageWidth * 0.17, top: -imageWidth * 0.16 }}>
            <Image src="/flores/flor6.png" width={imageWidth / 2.5} height={imageWidth / 2.5} alt="flor1" />
          </motion.div>
          <motion.div className="absolute z-40 top-0" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F2B} animate="rotate" style={{ right: -imageWidth * 0.14 }}>
            <Image src="/flores/flor1.png" width={imageWidth / 2} height={imageWidth / 2} alt="flor1" />
          </motion.div>
          <motion.div className="absolute z-30" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F3B} animate="rotate" style={{ right: -imageWidth * 0.13, bottom: -imageWidth * 0.1 }}>
            <Image src="/flores/flor2.png" width={imageWidth / 2} height={imageWidth / 2} alt="flor1" />
          </motion.div>
          <motion.div className="absolute z-40 " initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F1B} animate="rotate" style={{ right: -imageWidth * 0.1, top: imageWidth * 0.3 }}>
            <Image src="/flores/flor7.png" width={imageWidth / 2.7} height={imageWidth / 2.7} alt="flor1" />
          </motion.div>
          <motion.div className="absolute z-40" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F2B} animate="rotate" style={{ left: -imageWidth * 0.2, bottom: imageWidth * 0.1 }}>
            <Image src="/flores/flor3.png" width={imageWidth / 2} height={imageWidth / 2} alt="flor1" />
          </motion.div>
          <motion.div className="absolute z-40" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F3B} animate="rotate" style={{ left: -imageWidth * 0.05, bottom: -imageWidth * 0.1 }}>
            <Image src="/flores/blanca.png" width={imageWidth / 2} height={imageWidth / 2} alt="flor1" />
          </motion.div> */}
        </motion.div>
      </div>
      {/* <motion.div className="w-full absolute  z-30 overflow-hidden" style={{ height: windowWidth, left: -windowWidth * 0.25, bottom: -windowWidth * 0.1 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={MIRABEL} animate="asomar">
        <Image src="/mirabel.png" width={windowWidth / 2.5} height={windowWidth} alt="a" className="" />
      </motion.div>
      <motion.div className="w-full absolute  z-30 overflow-hidden" style={{ height: windowWidth, right: -windowWidth * 0.16, bottom: windowWidth / 8 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={ISABELA} animate="asomar">
        <Image src="/isabela2.png" width={windowWidth / 1.64} height={windowWidth} alt="a" className="" />
      </motion.div> */}
      <motion.div className="w-full absolute bottom-13 z-30 overflow-hidden" style={{ height: windowWidth, width: windowWidth / 5 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={HIJA}>
        <Image src="/IMG_0751.png" width={windowWidth / 5} height={windowWidth} alt="a" className="absolute bottom-1" />
      </motion.div>
      {/* <div style={{ width: windowWidth / 2, height: windowHeight / 2 }} className="bg-red-300 z-20 bottom-0 absolute">
        <motion.div className="absolute z-40 -left-5" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F1} animate="rotate">
          <Image src="/flores/flor5.png" width={imageWidth / 2} height={imageWidth / 2} alt="flor1" />
        </motion.div>
        <motion.div className="absolute z-40 right-0" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F1} animate="rotate">
          <Image src="/flores/flor5.png" width={imageWidth / 2} height={imageWidth / 2} alt="flor1" />
        </motion.div>
      </div> */}
      {/* <div className="flex w-full items-center justify-center z-40">
        <motion.div className="absolute z-40" style={{ right: (imageWidth / 2) * -1, bottom: (imageWidth / 2) * -1 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F1} animate="rotate">
          <Image src="/flores/flor4.png" width={imageWidth} height={imageWidth} alt="flor1" />
        </motion.div>
        <motion.div className="absolute z-40" style={{ left: (imageWidth / 2) * -1, bottom: (imageWidth / 2) * -1 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0 }} variants={F1} animate="rotate">
          <Image src="/flores/flor6.png" width={imageWidth} height={imageWidth} alt="flor1" />
        </motion.div>
        <motion.div className="absolute z-40 -bottom-6" style={{ left: imageWidth / 3 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F2} animate="rotate">
          <Image src="/flores/rosa1.png" width={imageWidth / 2} height={imageWidth / 2} alt="flor1" />
        </motion.div>
        <motion.div className="absolute z-40 -bottom-6" style={{ right: imageWidth / 3 }} initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F2} animate="rotate">
          <Image src="/flores/flor2.png" width={imageWidth / 2} height={imageWidth / 2} alt="flor1" />
        </motion.div>
        <motion.div className="absolute z-40 -bottom-20" initial={"offScreen"} whileInView={"onScreen"} viewport={{ once: false, amount: 0.5 }} variants={F1} animate="rotate">
          <Image src="/flores/flor5.png" width={imageWidth} height={imageWidth} alt="flor1" />
        </motion.div>
      </div> */}
    </section>
  );
};

export default Tres;
