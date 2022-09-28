import React, { Fragment } from "react";

import Button from "components/shared/Button/Button";
import ConfirmModal from "components/shared/ConfirmModal/ConfirmModal";
import Modal from "components/shared/Modal/Modal";
import ReminderModal from "components/shared/ReminderModal/ReminderModal";
import { object, func, array } from "prop-types";

import styles from "./DetailsModal.module.scss";
import useDetailsModal from "./useDetailsModal";

function DetailsModal({ reminder, closeModal, closeOtherModals }) {
  const {
    formattedDate,
    handleConfirmModalClose,
    handleConfirmModalOpen,
    handleDelete,
    handleEdit,
    handleReminderModalClose,
    isConfirmModalOpen,
    isReminderModalOpen,
  } = useDetailsModal({ reminder, closeModal, closeOtherModals });

  const { content, city, weather } = reminder || {};
  const { description, conditions } = weather || {};
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
      <Modal closeModal={closeModal} header={header}>
        <div>
          <h4>Content:</h4>
          <span>{content}</span>
        </div>
        <div>
          <h4>Details:</h4>
          <span>{`${formattedDate} - ${city}`}</span>
        </div>
        <div>
          <h4>Weather:</h4>
          <span>{`${conditions} - ${description}`}</span>
        </div>
      </Modal>
      {isReminderModalOpen && (
        <ReminderModal
          closeModal={handleReminderModalClose}
          closeOtherModals={[...closeOtherModals, closeModal]}
          {...reminder}
        />
      )}
      {isConfirmModalOpen && (
        <ConfirmModal
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
  closeModal: func.isRequired,
  closeOtherModals: array,
};

DetailsModal.defaultProps = {
  closeOtherModals: [],
};

export default DetailsModal;
