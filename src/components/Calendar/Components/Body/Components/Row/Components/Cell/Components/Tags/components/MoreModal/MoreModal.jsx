import React, { Fragment, useMemo } from "react";

import classnames from "classnames";
import DetailsModal from "components/shared/DetailsModal/DetailsModal";
import Modal from "components/shared/Modal/Modal";
import Tag from "components/shared/Tag/Tag";
import { string } from "prop-types";

import styles from "./MoreModal.module.scss";
import useMoreModal from "./useMoreModal";

function MoreModal({ closeModal, reminders }) {
  const {
    formattedDate,
    handleDetailsModalClose,
    handleTagClick,
    isDetailsModalOpen,
    monthPlusDay,
    selectedReminder,
    weekday,
  } = useMoreModal();

  const header = useMemo(
    () => (
      <div className={styles.header}>
        <h4 className={styles.weekday}>{weekday}</h4>
        <h3 className={styles["month-plus-day"]}>{formattedDate}</h3>
      </div>
    ),
    [formattedDate, weekday]
  );

  return (
    <Fragment>
      <Modal closeModal={closeModal} header={header}>
        {reminders.map((reminder, index) => (
          <Tag
            key={reminder.id}
            content={reminder.content}
            className={classnames(index !== 0 && styles.tag)}
            onClick={handleTagClick(reminder)}
          />
        ))}
      </Modal>
      {isDetailsModalOpen && (
        <DetailsModal
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

export default React.memo(MoreModal);
