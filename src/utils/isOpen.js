const isOpen = () => {
  // open from 9 - 5 M-F
  const d = new Date();
  const n = d.getDay();
  if (n === 0 || n === 6) return false;
  const h = d.getUTCHours();
  if (h < 13 || h >= 21) return false;
  return true;
};

const invert = () => !isOpen();

// export { isOpen as default, invert };
export { invert as default, isOpen };
