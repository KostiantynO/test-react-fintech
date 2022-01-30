// 2) сделать маску ввода на инпуте
// например для суммы с копейками * .00
// (если отличается от маски то не вводится ничего)
// Вместо * любое количество цифр, там где 00(это две любые цифры)

/* || TASK 2 ====== Vanila JS - input mask ====== */
import { getRefs } from 'utils';
const { input, form } = getRefs();

window.addEventListener('load', () => (input.value = ''));

const nonNumeric = /[^+0-9.-]/g;
//////////////////////////////////////// /^[^0|\D]\d{0,9}(\.\d{1,2})?$
const afterDot = /(^-?\d*?)(\.{0,1})(\d{0,2}?)/g;
/////////////////////////////////////////(^\-?\d*?)([.]?)(\d{1,2}?).?$
const updateInput = e => {
  const string = e.target.value.trim();
  const replacedNonDigits = string
    .replace(nonNumeric, '')
    .replace(afterDot, '$1$2$3');

  e.target.value = replacedNonDigits;
  console.log('e.target.value', e.target.value);
};

input.addEventListener(['keyup'], updateInput, { passive: true });
input.addEventListener(['change'], updateInput, { passive: true });

const preventKeyDown = event => {
  // Allow keyboard shortcuts
  if (
    event.getModifierState('Meta') ||
    event.getModifierState('Control') ||
    event.getModifierState('Alt')
  ) {
    console.log('Meta, Control or Alt pressed');
    return;
  }

  const { key } = event;
  // Allow non-printable keys
  if (key.length !== 1 || key === '\x00') {
    console.log("key.length !== 1 || key === '\x00'");
    return;
  }

  // Prevent any non-numeric keys, but allow . for decimals
  // and - for negative values
  if ((key < '0' || key > '9') && key !== '.' && key !== '-') {
    console.log("((key < '0' || key > '9') && key !== '.' && key !== '-')");
    event.preventDefault();
  }
};
input.addEventListener('keydown', preventKeyDown);

const handleSubmit = e => {
  e.preventDefault();
  const { value } = e.target.elements.maskedInput;
  const event = { target: { value } };
  updateInput(event);
};

form.addEventListener('submit', handleSubmit);

// $("input[name='masknumber']").on('keyup change', function () {
//   $("input[name='number']").val(destroyMask(this.value));
//   this.value = createMask($("input[name='number']").val());
// });

// function createMask(string) {
//   return string.replace(/(\d{2})(\d{3})(\d{2})/, '$1-$2-$3');
// }

// function destroyMask(string) {
//   return string.replace(/\D/g, '').substring(0, 8);
// }
