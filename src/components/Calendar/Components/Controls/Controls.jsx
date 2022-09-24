import React from "react";

import Button from "components/shared/Button/Button";
import { number, func } from "prop-types";

import styles from "./Controls.module.scss";
import getMonthNameFromNumber from "./utils/getMonthNameFromNumber";

function Controls({ month, setMonth, year, setYear }) {
  function handleClick(direction) {
    return () => {
      const newMonth = direction === "prev" ? month - 1 : month + 1;
      if (newMonth < 0) {
        setMonth(11);
        setYear((state) => state - 1);
        return;
      }

      if (newMonth > 11) {
        setMonth(0);
        setYear((state) => state + 1);
        return;
      }

      setMonth(newMonth);
    };
  }
  const monthName = getMonthNameFromNumber(month);

  return (
    <div className={styles.controls}>
      <Button
        onClick={handleClick("prev")}
        icon="chevronLeft"
        variant="circular"
      />
      <Button
        onClick={handleClick("next")}
        icon="chevronRight"
        className={styles["right-button"]}
        variant="circular"
      />
      <h1 className={styles.title}>
        {monthName} of {year}
      </h1>
    </div>
  );
}

Controls.propTypes = {
  month: number.isRequired,
  setMonth: func.isRequired,
  year: number.isRequired,
  setYear: func.isRequired,
};

export default Controls;
