import React from "react";

import classnames from "classnames";
import { string } from "prop-types";

import styles from "./Tag.module.scss";

function Tag({ content, color, className, onClick, onBlur }) {
  return (
    <div
      className={classnames(styles.tag, styles[color], className)}
      onClick={onClick}
      onBlur={onBlur}
    >
      <span>{content}</span>
    </div>
  );
}

Tag.propTypes = {
  content: string.isRequired,
};

export default Tag;
