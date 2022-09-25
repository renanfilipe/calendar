import React from "react";

import classnames from "classnames";
import DetailsModal from "components/shared/DetailsModal/DetailsModal";
import useDetailsModal from "components/shared/DetailsModal/useDetailsModal";
import useModal from "components/shared/Modal/useModal";
import Tag from "components/shared/Tag/Tag";
import { string, arrayOf, shape } from "prop-types";
import useCalendarActions from "reducers/calendar/actions";

import MoreModal from "./components/MoreModal/MoreModal";
import styles from "./Tags.module.scss";

function Tags({ reminders }) {
  const { setActiveDay } = useCalendarActions();

  const {
    handleTagClick,
    isDetailsModalOpen,
    handleDetailsModalClose,
    selectedReminder,
  } = useDetailsModal();

  const { isMoreModalOpen, handleMoreModalClose, handleMoreModalOpen } =
    useModal("MoreModal");

  function handleMoreClick() {
    setActiveDay(reminders[0].date);
    handleMoreModalOpen();
  }

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
          onClick={handleMoreClick}
        />
      )}
      {isMoreModalOpen && (
        <MoreModal
          isOpen={isMoreModalOpen}
          closeModal={handleMoreModalClose}
          reminders={reminders}
        />
      )}
      {isDetailsModalOpen && (
        <DetailsModal
          isOpen={isDetailsModalOpen}
          closeModal={handleDetailsModalClose}
          reminder={selectedReminder}
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
