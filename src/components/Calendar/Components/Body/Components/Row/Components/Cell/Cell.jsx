import React from "react";

import classNames from "classnames";
import { number, bool } from "prop-types";

import styles from "./Cell.module.scss";

function Cell({ value, isWeekend, isCurrentMonth }) {
  const className = classNames([
    styles.cell,
    isCurrentMonth && styles["is-in-month"],
    isWeekend && styles["is-weekend"],
  ]);

  return <td className={className}>{value}</td>;
}

Cell.propTypes = {
  value: number.isRequired,
  isWeekend: bool,
  isCurrentMonth: bool,
};

Cell.defaultProps = {
  isWeekend: undefined,
  isCurrentMonth: undefined,
};

export default Cell;
