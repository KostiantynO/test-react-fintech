import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'index.css';
import 'styles/main.scss';

import 'helpers/format-number'; // task-1
import 'helpers/input-mask'; // task-2
import { App } from 'components'; // task-3

import { getRefs } from 'utils';
const { root } = getRefs();

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={3000} />
  </React.StrictMode>,
  root
);
