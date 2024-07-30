import { useEffect } from 'react';

import Modal from 'react-modal';
import PropTypes from 'prop-types';

import css from './BasicModal.module.css';

Modal.setAppElement('#root');

const BasicModal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
    >
      <div className={css.modalContent}>{children}</div>
    </Modal>
  );
};

BasicModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default BasicModal;
