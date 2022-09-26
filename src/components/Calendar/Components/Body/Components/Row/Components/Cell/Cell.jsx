import React from "react";
import { useSelector } from "react-redux";

import classnames from "classnames";
import { number, bool } from "prop-types";
import { getReminders } from "reducers/calendar/selectors";

import styles from "./Cell.module.scss";
import Tags from "./components/Tags/Tags";

function Cell({ day, month, year, isWeekend, isCurrentMonth, isToday }) {
  const reminders = useSelector(getReminders(day, month, year));

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
      {reminders.length > 0 && <Tags reminders={reminders} />}
    </td>
  );
}

Cell.propTypes = {
  day: number.isRequired,
  isWeekend: bool.isRequired,
  isCurrentMonth: bool.isRequired,
  isToday: bool.isRequired,
};

Cell.defaultProps = {};

export default Cell;