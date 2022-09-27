import React, { Fragment, useMemo } from "react";

import Button from "components/shared/Button/Button";
import Modal from "components/shared/Modal/Modal";
import { string, func } from "prop-types";

import styles from "./ConfirmModal.module.scss";

function ConfirmModal({ closeModal, onConfirm, message, className }) {
  const footer = useMemo(
    () => (
      <Fragment>
        <Button onClick={closeModal} variant="secondary">
          No
        </Button>
        <Button onClick={onConfirm} className={styles.button} variant="primary">
          Yes
        </Button>
      </Fragment>
    ),
    [closeModal, onConfirm]
  );

  return (
    <Modal closeModal={closeModal} footer={footer} className={className}>
      {message}
    </Modal>
  );
}

ConfirmModal.propTypes = {
  closeModal: func.isRequired,
  onConfirm: func.isRequired,
  message: string.isRequired,
  className: string,
};

ConfirmModal.defaultProps = {
  className: undefined,
};

export default React.memo(ConfirmModal);
