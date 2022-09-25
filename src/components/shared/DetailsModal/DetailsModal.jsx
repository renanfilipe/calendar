import React, { Fragment } from "react";

import Button from "components/shared/Button/Button";
import Modal from "components/shared/Modal/Modal";
import useModal from "components/shared/Modal/useModal";
import ReminderModal from "components/shared/ReminderModal/ReminderModal";
import { string } from "prop-types";

import styles from "./DetailsModal.module.scss";

function DetailsModal({ reminder, isOpen, closeModal, monthPlusDay }) {
  const {
    isReminderModalOpen,
    handleReminderModalClose,
    handleReminderModalOpen,
  } = useModal("ReminderModal");

  function handleEdit() {
    handleReminderModalOpen();
  }

  const { content, city, date } = reminder;
  const header = (
    <div>
      <Button onClick={handleEdit} variant="primary">
        Edit
      </Button>
      <Button onClick={() => {}} variant="danger" className={styles.button}>
        Delete
      </Button>
    </div>
  );

  return (
    <Fragment>
      <Modal isOpen={isOpen} closeModal={closeModal} header={header}>
        <div>{content}</div>
        <div>{`${monthPlusDay} - ${city}`}</div>
      </Modal>
      {isReminderModalOpen && (
        <ReminderModal
          isOpen={isReminderModalOpen}
          closeModal={handleReminderModalClose}
          content={content}
          city={city}
          date={date}
        />
      )}
    </Fragment>
  );
}

DetailsModal.propTypes = {
  content: string,
};

export default DetailsModal;
