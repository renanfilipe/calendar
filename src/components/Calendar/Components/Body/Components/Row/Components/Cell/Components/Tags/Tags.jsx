import React from "react";

import classnames from "classnames";
import { string, arrayOf, shape } from "prop-types";

import Tag from "./Components/Tag/Tag";
import styles from "./Tags.module.scss";

function Tags({ reminders }) {
  const hasMore = reminders.length > 4;

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
