// const newLib = Intl.NumberFormat;
// console.log('newLib', newLib);

export const formatNumber = num => {
  if (typeof num !== 'string') {
    return console.warn(`TypeError: expected string, received ${typeof num}`);
  }

  return parseInt(num, 10).toLocaleString();
};
