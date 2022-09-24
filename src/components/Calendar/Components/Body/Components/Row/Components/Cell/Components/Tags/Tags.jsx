import React from "react";

import classnames from "classnames";
import { string } from "prop-types";

import Tag from "./Components/Tag/Tag";
import styles from "./Tags.module.scss";

function Tags({ reminders, day, month }) {
  return (
    <div className={styles.tags}>
      {reminders.map((content, index) => (
        <Tag
          key={`tag-${day}-${month}`}
          content={content}
          className={classnames(index !== 0 && styles.tag)}
        />
      ))}
    </div>
  );
}

Tags.propTypes = {
  content: string.isRequired,
};

export default Tags;
