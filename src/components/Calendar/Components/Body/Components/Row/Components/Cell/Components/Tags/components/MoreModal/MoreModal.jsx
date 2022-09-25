import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import classnames from "classnames";
import DetailsModal from "components/shared/DetailsModal/DetailsModal";
import useDetailsModal from "components/shared/DetailsModal/useDetailsModal";
import Modal from "components/shared/Modal/Modal";
import Tag from "components/shared/Tag/Tag";
import { string } from "prop-types";
import { getActiveDay } from "reducers/calendar/selectors";

import styles from "./MoreModal.module.scss";

function MoreModal({ isOpen, closeModal, reminders }) {
  const activeDay = useSelector(getActiveDay);
  const date = new Date(...activeDay.split("-"));
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const {
    handleTagClick,
    isDetailsModalOpen,
    handleDetailsModalClose,
    selectedReminder,
    monthPlusDay,
  } = useDetailsModal();

  const header = (
    <div className={styles.header}>
      <h4 className={styles.weekday}>{weekday}</h4>
      <h3 className={styles["month-plus-day"]}>{formattedDate}</h3>
    </div>
  );

  return (
    <Fragment>
      {isOpen && (
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
      )}
      {isDetailsModalOpen && (
        <DetailsModal
          isOpen={isDetailsModalOpen}
          closeModal={handleDetailsModalClose}
          reminder={selectedReminder}
          monthPlusDay={monthPlusDay}
          closeOtherModals={[closeModal]}
        />
      )}
    </Fragment>
  );
}

MoreModal.propTypes = {
  content: string,
};

export default MoreModal;
