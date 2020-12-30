import moment from 'moment';

const isOpen = () => {
  // open from 9 - 5 M-F ET
  const d = moment.utc().subtract(5, 'hours');
  const n = d.day();
  if (n === 0 || n === 6) return false;
  const h = d.hours();
  if (h < 9 || h >= 17) return false;
  return true;
};

const invert = () => !isOpen();

export { isOpen as default, invert };
