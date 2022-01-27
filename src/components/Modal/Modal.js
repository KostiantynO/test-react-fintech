import { useState } from 'react';
import { createPortal } from 'react-dom';
import { getRefs } from 'utils';

import scss from './Modal.module.scss';

const { modalRoot } = getRefs();

export const Modal = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(s => !s);

  return createPortal(
    <div className={scss.Backdrop} onClick={toggleModal}>
      <div className={scss.Modal}>{children}</div>
    </div>,
    modalRoot
  );
};
