import React from "react";

import classNames from "classnames";
import { number, bool } from "prop-types";

import styles from "./Cell.module.scss";

function Cell({ value, isWeekend, isCurrentMonth, isToday }) {
  const className = classNames([
    styles.cell,
    isCurrentMonth && styles["is-in-month"],
    isWeekend && styles["is-weekend"],
  ]);

  return (
    <td className={className}>
      <div className={classNames(styles.value, isToday && styles["is-today"])}>
        <span>{value}</span>
      </div>
    </td>
  );
}

Cell.propTypes = {
  value: number.isRequired,
  isWeekend: bool.isRequired,
  isCurrentMonth: bool.isRequired,
  isToday: bool.isRequired,
};

export default Cell;
