/* || TASK 1 ====== Vanila JS - format number ====== */
const numberFormat = new Intl.NumberFormat([], {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatNumber = (number, { separator = '' }) =>
  numberFormat
    .formatToParts(number)
    .map(({ type, value }) =>
      type === 'decimal' ? '.' : type === 'group' ? separator : value
    )
    .join('');

const string = '3123123.00';
const formatted = formatNumber(string, { separator: ' ' });
console.log(formatted); // "3 123 123.00"

// task 2
export const maskInput = (number, { separator = '' }) => {
  //  numberFormat
  //    .formatToParts(number)
  //    .reduce(
  //      (acc, { type, value }) =>
  //        ({
  //          sign: value?.length > 1 ? value[0] : value,
  //          decimal: '.',
  //          group: separator,
  //          fraction: value,
  //        }[type]),

  //      '',
  //    )
  //    .join('');

  return numberFormat.formatToParts(number);
};
