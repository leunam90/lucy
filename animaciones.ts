import { delay } from "framer-motion";

export const F1 = {
  offScreen: { y: 2, opacity: 0, scale: 0.2 },
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

export const F2 = {
  offScreen: { y: 2, opacity: 0, scale: 0.6 },
  onScreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 4, type: "spring", bounce: 0.6 },
  },
  rotate: {
    rotate: [0, -360],
    transition: { repeat: Infinity, duration: 10, ease: "linear" },
  },
};

export const F3 = {
  offScreen: { y: 0, opacity: 0, scale: 0 },
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

export const texto1 = {
  offScreen: { y: -200, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 360, 0],
    transition: { duration: 2, type: "spring", bounce: 0.4 },
  },
};

export const texto2 = {
  offScreen: { y: 200, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 360, 0],
    transition: { duration: 2, type: "spring", bounce: 0.4, delay: 1 },
  },
};
export const texto3 = {
  offScreen: { y: 80, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 360, 0],
    transition: { duration: 2, type: "spring", bounce: 0.4, delay: 1.6 },
  },
};
export const texto4 = {
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 360, 0],
    transition: { duration: 2, type: "spring", bounce: 0.4, delay: 2 },
  },
};
export const texto5 = {
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 360, 0],
    transition: { duration: 2, type: "spring", bounce: 0.4, delay: 2.6 },
  },
};
export const texto1b = {
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 360, 0],
    transition: { duration: 2, type: "spring", bounce: 0.4 },
  },
};
export const texto2b = {
  offScreen: { y: 100, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 360, 0],
    transition: { duration: 2, type: "spring", bounce: 0.4, delay: 1.6 },
  },
};
export const texto3b = {
  offScreen: { y: 0, opacity: 0, scale: 0 },
  onScreen: {
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: [0, 360, 0],
    transition: { duration: 2, type: "spring", bounce: 0.5, delay: 2.3 },
  },
  rotate: {
    rotate: [0, -360],
    transition: { repeat: Infinity, duration: 10, ease: "linear" },
  },
};
export const texto4b = {
  offScreen: { y: 0, opacity: 0, scale: 0 },
  onScreen: {
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: [0, 360, 0],
    transition: { duration: 2, type: "spring", bounce: 0.5, delay: 2.9 },
  },
  rotate: {
    rotate: [0, -360],
    transition: { repeat: Infinity, duration: 10, ease: "linear" },
  },
};

export const F1B = {
  offScreen: { y: 2, opacity: 0, scale: 0.2 },
  onScreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 4, type: "spring", bounce: 0.6, delay: 6 },
  },
  rotate: {
    rotate: [0, 360],
    transition: { repeat: Infinity, duration: 10, ease: "linear" },
  },
};
export const F2B = {
  offScreen: { y: 2, opacity: 0, scale: 0.2 },
  onScreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 4, type: "spring", bounce: 0.6, delay: 6.3 },
  },
  rotate: {
    rotate: [0, 360],
    transition: { repeat: Infinity, duration: 10, ease: "linear" },
  },
};
export const F3B = {
  offScreen: { y: 2, opacity: 0, scale: 0.2 },
  onScreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 4, type: "spring", bounce: 0.6, delay: 7 },
  },
  rotate: {
    rotate: [0, 360],
    transition: { repeat: Infinity, duration: 10, ease: "linear" },
  },
};

export const MIRABEL = {
  offScreen: { x: -200 },
  onScreen: {
    x: 0,
    transition: { duration: 2, delay: 3.5 },
  },
  asomar: {
    rotate: [40],
    transition: { repeat: 1, duration: 2, ease: "linear" },
  },
};
export const ISABELA = {
  offScreen: { x: 300 },
  onScreen: {
    x: 150,
    transition: { duration: 2, delay: 4 },
  },
  asomar: {
    rotate: [-25],
    transition: { repeat: 1, duration: 2, ease: "linear" },
  },
};
export const HIJA = {
  offScreen: { y: 350, opacity: 0 },
  onScreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 2, delay: 3 },
  },
  asomar: {
    rotate: [0, -20],
    transition: { repeat: 1, duration: 2, ease: "linear" },
  },
};
