import Modal from 'react-modal';
import PropTypes from 'prop-types';

import css from './BasicModal.module.css';

Modal.setAppElement('#root');

const BasicModal = ({ isOpen, onClose, children }) => {
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
