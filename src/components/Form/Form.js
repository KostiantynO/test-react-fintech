import { useState } from 'react';
import { toast } from 'react-toastify';
import { formatNumber } from 'helpers';
import scss from './Form.module.scss';

export const Form = ({ onSubmit, formattedAmount }) => {
  const [amount, setAmount] = useState('0');

  const handleChange = e => {
    const formatted = formatNumber(e.target.value);
    setAmount(formatted);
  };

  const reset = () => {
    setAmount('0');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!amount) {
      return toast.error('Please enter correct amount');
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
        />
      </label>

      <p className={scss.Amount}>{amount}</p>

      <button className={scss.SubmitBtn} type="submit">
        Confirm amount
      </button>
    </form>
  );
};
