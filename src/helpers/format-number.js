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
