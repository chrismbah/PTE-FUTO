export const fadeInVariants1 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      duration: 0.4,
    },
  }),
};

export const fadeInVariants2 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      duration: 0.7,
    },
  }),
};
export const fadeInVariants3 = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      duration: 0.4,
    },
  }),
};
export const fadeInVariants4 = {
  initial: {
    opacity: 0,
    y: -10,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
      duration: 0.4,
    },
  }),
};
