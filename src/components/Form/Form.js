import { useState, useContext, useRef } from 'react';
import { AppContext } from 'context';
import { toast } from 'react-toastify';
import scss from './Form.module.scss';
import { action } from 'hooks';

export const Form = () => {
  const [amount, setAmount] = useState('0');
  const [, dispatch] = useContext(AppContext);
  const toastId = useRef(null);

  const handleChange = e => {
    const { value } = e.target;

    if (value?.length > 15) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.warning('Please enter correct amount.');
      }
      return;
    }

    setAmount(value);
    toastId.current = null;
  };

  const reset = () => {
    setAmount('0');
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (amount === '' || amount === '0' || amount?.length > 15) {
      return toast.warning('Please enter correct amount');
    }

    dispatch({ type: action.setAmount, payload: amount });
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
