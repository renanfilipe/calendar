import React from "react";

import classnames from "classnames";
import { string } from "prop-types";

import styles from "./Tag.module.scss";

function Tag({ content, color, className }) {
  return (
    <div className={classnames(styles.tag, styles[color], className)}>
      <span>{content}</span>
    </div>
  );
}

Tag.propTypes = {
  content: string.isRequired,
};

export default Tag;
