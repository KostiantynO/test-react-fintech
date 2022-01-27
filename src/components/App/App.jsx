import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Form } from 'components';

import 'react-toastify/dist/ReactToastify.css';
import scss from './App.module.scss';

export const App = () => {
  const [amount, setAmount] = useState(0);
  console.log('App ~ amount', amount);

  return (
    <div className={scss.App}>
      <section className={scss.Section}>
        <div className={scss.Container}>
          <h1 className={scss.H1}>Format Number</h1>

          <Form onSubmit={setAmount} />
        </div>
      </section>
      <ToastContainer autoClose={3000} />
    </div>
  );
};
