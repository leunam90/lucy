"use client";
import { motion } from "framer-motion";

const Video = () => {
  const festejado = "Isabellita".split("");
  const invitacion = "Te invita a celebrar su cumpleaños numero".split("");

  return (
    <div className="w-full h-svh bg-blue-400 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-7xl font-black flex">
        {festejado.map((letra, i) => (
          <motion.span
            initial={{ opacity: 0, scale: 4, rotate: 360 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
            transition={{
              duration: 1,
              delay: i / 8,
            }}
            key={i}
          >
            {letra}
          </motion.span>
        ))}
      </h1>
      <motion.p
        initial={{ opacity: 0, scale: 0, y: -100 }}
        animate={{ opacity: 1, scale: 1.2, y: 0 }}
        transition={{
          duration: 0.25,
          delay: 1,
        }}
        className="text-xl font-semibold"
      >
        {invitacion.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default Video;
// import "./styles.css";
// import { motion } from "framer-motion";

// function Video() {
//   const text = "Framer Motion is a really cool tool".split(" ");

//   return (
//     <div className="App">
//       {text.map((el, i) => (
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 0.25,
//             delay: i / 10,
//           }}
//           key={i}
//         >
//           {el}{" "}
//         </motion.span>
//       ))}
//     </div>
//   );
// }

// export default Video;
