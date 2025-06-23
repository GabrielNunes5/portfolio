
export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { delay, duration: 0.6, type: "spring" },
      y: { delay, duration: 0.6, type: "spring" }
    }
  }
});

export const scaleIn = (delay: number = 0) => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: [0.11, 0, 0.5, 0],
      delay: delay 
    } 
  },
});

export const slideInLeft = (delay: number = 0) => ({
  initial: { opacity: 0, x: -50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: [0.11, 0, 0.5, 0],
      delay: delay 
    } 
  },
});

export const slideInRight = (delay: number = 0) => ({
  initial: { opacity: 0, x: 50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6,
      ease: [0.11, 0, 0.5, 0],
      delay: delay 
    } 
  },
});

export const slideInTop = (delay: number = 0) => ({
  initial: { opacity: 0, y: -50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.11, 0, 0.5, 0],
      delay: delay 
    } 
  },
});

export const slideInBottom = (delay: number = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.11, 0, 0.5, 0],
      delay: delay 
    } 
  },
});
