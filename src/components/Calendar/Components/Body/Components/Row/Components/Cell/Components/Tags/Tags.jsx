import React, { useState } from "react";

import classnames from "classnames";
import Tag from "components/shared/Tag/Tag";
import { string, arrayOf, shape } from "prop-types";

import MoreModal from "./components/MoreModal/MoreModal";
import styles from "./Tags.module.scss";

function Tags({ reminders, day, month, year }) {
  const [isOpen, setIsOpen] = useState(false);

  const hasMore = reminders.length > 4;
  function handleClick() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles.tags}>
      {(hasMore ? reminders.slice(0, 3) : reminders).map(
        ({ id, content }, index) => (
          <Tag
            key={id}
            content={content}
            className={classnames(index !== 0 && styles.tag)}
          />
        )
      )}
      {hasMore && (
        <Tag
          content={`${reminders.length - 3} more`}
          className={styles.tag}
          color="transparent"
          onClick={handleClick}
        />
      )}
      <MoreModal
        isOpen={isOpen}
        closeModal={closeModal}
        day={day}
        month={month}
        year={year}
        reminders={reminders}
      />
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
