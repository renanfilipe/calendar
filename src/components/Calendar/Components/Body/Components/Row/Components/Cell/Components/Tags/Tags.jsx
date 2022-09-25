import React from "react";

import classnames from "classnames";
import DetailsModal from "components/shared/DetailsModal/DetailsModal";
import useDetailsModal from "components/shared/DetailsModal/useDetailsModal";
import useModal from "components/shared/Modal/useModal";
import Tag from "components/shared/Tag/Tag";
import { string, arrayOf, shape } from "prop-types";

import MoreModal from "./components/MoreModal/MoreModal";
import styles from "./Tags.module.scss";

function Tags({ reminders, day, month, year }) {
  const {
    handleTagClick,
    isDetailsModalOpen,
    handleCloseDetailsModal,
    selectedReminder,
    monthPlusDay,
  } = useDetailsModal({ day, month, year });

  const {
    isOpen: isMoreModalOpen,
    handleClose: handleCloseMoreModal,
    handleOpen: handleOpenMoreModal,
  } = useModal();

  const hasMore = reminders.length > 4;

  return (
    <div className={styles.tags}>
      {(hasMore ? reminders.slice(0, 3) : reminders).map((reminder, index) => (
        <Tag
          key={reminder.id}
          content={reminder.content}
          className={classnames(index !== 0 && styles.tag)}
          onClick={handleTagClick(reminder)}
        />
      ))}
      {hasMore && (
        <Tag
          content={`${reminders.length - 3} more`}
          className={styles.tag}
          color="transparent"
          onClick={handleOpenMoreModal}
        />
      )}
      {isMoreModalOpen && (
        <MoreModal
          isOpen={isMoreModalOpen}
          closeModal={handleCloseMoreModal}
          day={day}
          month={month}
          year={year}
          reminders={reminders}
        />
      )}
      {isDetailsModalOpen && (
        <DetailsModal
          isOpen={isDetailsModalOpen}
          closeModal={handleCloseDetailsModal}
          reminder={selectedReminder}
          monthPlusDay={monthPlusDay}
        />
      )}
    </div>
  );
}

Tags.propTypes = {
  reminders: arrayOf(
    shape({
      id: string.isRequired,
      content: string.isRequired,
      city: string.isRequired,
    })
  ).isRequired,
};

export default Tags;
