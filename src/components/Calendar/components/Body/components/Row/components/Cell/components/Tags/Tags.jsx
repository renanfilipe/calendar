import React from "react";

import classnames from "classnames";
import DetailsModal from "components/shared/DetailsModal/DetailsModal";
import Tag from "components/shared/Tag/Tag";
import { string, arrayOf, shape } from "prop-types";

import MoreModal from "./components/MoreModal/MoreModal";
import styles from "./Tags.module.scss";
import useTags from "./useTags";

function Tags({ reminders }) {
  const {
    handleDetailsModalClose,
    handleMoreClick,
    handleMoreModalClose,
    handleTagClick,
    hasMore,
    isDetailsModalOpen,
    isMoreModalOpen,
    selectedReminder,
  } = useTags(reminders);

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
        <MoreModal closeModal={handleMoreModalClose} reminders={reminders} />
      )}
      {isDetailsModalOpen && (
        <DetailsModal
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
