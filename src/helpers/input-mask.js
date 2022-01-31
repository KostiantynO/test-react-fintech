// 2) сделать маску ввода на инпуте
// например для суммы с копейками * .00
// (если отличается от маски то не вводится ничего)
// Вместо * любое количество цифр, там где 00(это две любые цифры)

/* || TASK 2 ====== Vanila JS - input mask ====== */
import { getRefs } from 'utils';
import { maskInput } from './format-number';
const { input, form } = getRefs();

let inputState = '';

const updateInput = e => {
  const string = e.target.value.trim();

  const sign = string.replace(/[^-]/g, '');
  console.log('sign', sign);

  const digits = string.replace(/\D/g, '');
  console.log('digits', digits);

  // inputState =
  //   string.length > 15
  //     ? string.slice(0, 15)
  //     : string.replace(/.*?([-]+?).*?(\d*).*?([.]+?).*?(\d{2}).*/g, '$1$2$3$4');

  console.log('inputState', string);
  inputState = maskInput(string);
  console.log('inputState', inputState);
  // e.target.value = inputState;
};

input.addEventListener('keydown', updateInput, { passive: true });
input.addEventListener('keyup', updateInput, { passive: true });

input.addEventListener('keydown', event => {
  // Allow keyboard shortcuts
  if (
    event.getModifierState('Meta') ||
    event.getModifierState('Control') ||
    event.getModifierState('Alt')
  ) {
    return;
  }

  const { key } = event;

  // Allow non-printable keys
  if (key.length !== 1 || key === '\x00') return;

  // prevent input dot after dot
  if (key === '.') {
    if (inputState.includes('.')) {
      event.preventDefault();
      return;
    }
  }

  if (inputState.includes('.')) {
    if (!['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) {
      event.preventDefault();
      return;
    }
  }

  // Prevent any non-numeric keys, but allow . for decimals
  // and - for negative values
  if ((key < '0' || key > '9') && key !== '.' && key !== '-') {
    event.preventDefault();
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const { value } = e.target.elements.maskedInput;
  updateInput({ target: { value } });
});
