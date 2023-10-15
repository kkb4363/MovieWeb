export const sliderVariants = {
  hidden: (custom) => ({
    x: custom ? window.outerWidth : -window.outerWidth,
  }),
  visible: {
    x: 0,
  },
  exit: (custom) => ({
    x: custom ? -window.outerWidth : window.outerWidth,
  }),
};
