import { useState } from 'react';
import { toast } from 'react-toastify';
import scss from './Form.module.scss';

const toastId = 'out-of-range-twelve-significant';

export const Form = ({ onSubmit }) => {
  const [amount, setAmount] = useState('0');

  const handleChange = e => {
    const { value } = e.target;
    if (value?.length > 15) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast('Please enter amount.');
      }

      return;
    }

    setAmount(value);
  };

  const reset = () => {
    setAmount('0');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!amount || amount === '0') {
      return toast.warning('Please enter correct amount');
    }

    onSubmit(amount);
    reset();
  };

  return (
    <form className={scss.Form} onSubmit={handleSubmit}>
      <label className={scss.Label}>
        <input
          value={amount}
          onChange={handleChange}
          className={scss.Input}
          type="number"
          name="amount"
          required
          autoComplete="false"
          maxLength={15}
          minLength={1}
          max={999999999999}
          min={-999999999999}
        />
      </label>

      <p className={scss.Amount}>{amount}</p>

      <button className={scss.SubmitBtn} type="submit">
        Confirm amount
      </button>
    </form>
  );
};
