import React, { Fragment } from "react";

import classnames from "classnames";
import DetailsModal from "components/shared/DetailsModal/DetailsModal";
import useDetailsModal from "components/shared/DetailsModal/useDetailsModal";
import Modal from "components/shared/Modal/Modal";
import Tag from "components/shared/Tag/Tag";
import { string } from "prop-types";

import styles from "./MoreModal.module.scss";

function MoreModal({ isOpen, closeModal, day, month, year, reminders }) {
  const {
    handleTagClick,
    isDetailsModalOpen,
    handleCloseDetailsModal,
    selectedReminder,
    monthPlusDay,
  } = useDetailsModal({ day, month, year });

  const date = new Date(year, month, day);
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

  const header = (
    <div className={styles.header}>
      <h4 className={styles.weekday}>{weekday}</h4>
      <h3 className={styles["month-plus-day"]}>{monthPlusDay}</h3>
    </div>
  );

  return (
    <Fragment>
      <Modal isOpen={isOpen} closeModal={closeModal} header={header}>
        {reminders.map((reminder, index) => (
          <Tag
            key={reminder.id}
            content={reminder.content}
            className={classnames(index !== 0 && styles.tag)}
            onClick={handleTagClick(reminder)}
          />
        ))}
      </Modal>
      <DetailsModal
        isOpen={isDetailsModalOpen}
        closeModal={handleCloseDetailsModal}
        reminder={selectedReminder}
        monthPlusDay={monthPlusDay}
      />
    </Fragment>
  );
}

MoreModal.propTypes = {
  content: string,
};

export default MoreModal;
