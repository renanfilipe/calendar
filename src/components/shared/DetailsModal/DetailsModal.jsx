import React from "react";

import Button from "components/shared/Button/Button";
import Modal from "components/shared/Modal/Modal";
import { string } from "prop-types";

import styles from "./DetailsModal.module.scss";

function DetailsModal({ reminder, isOpen, closeModal, monthPlusDay }) {
  const { content, city } = reminder;
  const header = (
    <div>
      <Button onClick={() => {}} variant="primary">
        Edit
      </Button>
      <Button onClick={() => {}} variant="danger" className={styles.button}>
        Delete
      </Button>
    </div>
  );

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} header={header}>
      <div>{content}</div>
      <div>{`${monthPlusDay} - ${city}`}</div>
    </Modal>
  );
}

DetailsModal.propTypes = {
  content: string,
};

export default DetailsModal;
