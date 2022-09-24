import React from "react";

import classnames from "classnames";
import { number, bool, array } from "prop-types";

import styles from "./Cell.module.scss";
import Tags from "./Components/Tags/Tags";

function Cell({ day, month, isWeekend, isCurrentMonth, isToday, reminders }) {
  const className = classnames([
    styles.cell,
    isCurrentMonth && styles["is-in-month"],
    isWeekend && styles["is-weekend"],
  ]);

  return (
    <td className={className}>
      <div className={classnames(styles.value, isToday && styles["is-today"])}>
        <span>{day}</span>
      </div>
      {reminders.length > 0 && (
        <Tags reminders={reminders} day={day} month={month} />
      )}
    </td>
  );
}

Cell.propTypes = {
  day: number.isRequired,
  month: number.isRequired,
  isWeekend: bool.isRequired,
  isCurrentMonth: bool.isRequired,
  isToday: bool.isRequired,
  reminders: array,
};

Cell.defaultProps = {
  reminders: [],
};

export default Cell;
