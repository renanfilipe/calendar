import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import Button from "components/shared/Button/Button";
import ConfirmModal from "components/shared/ConfirmModal/ConfirmModal";
import Modal from "components/shared/Modal/Modal";
import useModal from "components/shared/Modal/useModal";
import ReminderModal from "components/shared/ReminderModal/ReminderModal";
import { toast } from "components/shared/Toast/Toast";
import { object, bool, func, array } from "prop-types";
import useCalendarActions from "reducers/calendar/actions";
import { getActiveDay } from "reducers/calendar/selectors";

import styles from "./DetailsModal.module.scss";

function DetailsModal({ reminder, isOpen, closeModal, closeOtherModals }) {
  const { removeReminder } = useCalendarActions();
  const activeDay = useSelector(getActiveDay);
  const formattedDate = new Date(...activeDay.split("-")).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      hour: "numeric",
    }
  );

  const {
    isReminderModalOpen,
    handleReminderModalClose,
    handleReminderModalOpen,
  } = useModal("ReminderModal");

  const {
    isConfirmModalOpen,
    handleConfirmModalClose,
    handleConfirmModalOpen,
  } = useModal("ConfirmModal");

  function handleEdit() {
    handleReminderModalOpen();
  }

  function handleDelete() {
    removeReminder({
      ...reminder,
      date: new Date(...reminder.date.split("-")),
    });
    toast("Reminder removed successfully!", { type: "success" });
    handleConfirmModalClose();
    closeModal();
    closeOtherModals.forEach((func) => func());
  }

  const { content, city } = reminder;
  const header = (
    <div>
      <Button onClick={handleEdit} variant="primary">
        Edit
      </Button>
      <Button
        onClick={handleConfirmModalOpen}
        variant="danger"
        className={styles.button}
      >
        Delete
      </Button>
    </div>
  );

  return (
    <Fragment>
      <Modal isOpen={isOpen} closeModal={closeModal} header={header}>
        <div>{content}</div>
        <div>{`${formattedDate} - ${city}`}</div>
      </Modal>
      {isReminderModalOpen && (
        <ReminderModal
          isOpen={isReminderModalOpen}
          closeModal={handleReminderModalClose}
          closeOtherModals={[...closeOtherModals, closeModal]}
          {...reminder}
        />
      )}
      {isConfirmModalOpen && (
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          closeModal={handleConfirmModalClose}
          onConfirm={handleDelete}
          message="Are you sure you want to delete it?"
          className={styles.modal}
        />
      )}
    </Fragment>
  );
}

DetailsModal.propTypes = {
  reminder: object.isRequired,
  isOpen: bool.isRequired,
  closeModal: func.isRequired,
  closeOtherModals: array,
};

DetailsModal.defaultProps = {
  closeOtherModals: [],
};

export default DetailsModal;
