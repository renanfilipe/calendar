import React, { Fragment } from "react";

import Button from "components/shared/Button/Button";
import Modal from "components/shared/Modal/Modal";
import { string, bool, func } from "prop-types";

import styles from "./ConfirmModal.module.scss";

function ConfirmModal({ isOpen, closeModal, onConfirm, message, className }) {
  const footer = (
    <Fragment>
      <Button onClick={closeModal} variant="secondary">
        No
      </Button>
      <Button onClick={onConfirm} className={styles.button} variant="primary">
        Yes
      </Button>
    </Fragment>
  );

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      footer={footer}
      className={className}
    >
      {message}
    </Modal>
  );
}

ConfirmModal.propTypes = {
  isOpen: bool.isRequired,
  closeModal: func.isRequired,
  onConfirm: func.isRequired,
  message: string.isRequired,
  className: string,
};

ConfirmModal.defaultProps = {
  className: undefined,
};

export default ConfirmModal;
