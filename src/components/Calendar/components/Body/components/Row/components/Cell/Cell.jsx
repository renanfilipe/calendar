import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import classnames from "classnames";
import { number, bool } from "prop-types";
import { getReminders } from "reducers/calendar/selectors";

import styles from "./Cell.module.scss";
import Tags from "./components/Tags/Tags";

function Cell({
  day,
  month,
  year,
  isWeekend,
  isCurrentMonth,
  isToday,
  dataTestId,
}) {
  const reminders = useSelector(getReminders(day, month, year), shallowEqual);

  const className = classnames([
    styles.cell,
    isCurrentMonth && styles["is-in-month"],
    isWeekend && styles["is-weekend"],
  ]);

  return (
    <td className={className} data-testid={dataTestId}>
      <div
        className={classnames(styles.value, isToday && styles["is-today"])}
        data-testid={isToday && "today"}
      >
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

export default React.memo(Cell);
