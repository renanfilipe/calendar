import React from "react";

import ChevronLeft from "assets/chevronLeft.svg";
import ChevronRight from "assets/chevronRight.svg";
import { number, func } from "prop-types";

import styles from "./Controls.module.scss";
import getMonthNameFromNumber from "./Utils/getMonthNameFromNumber";

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
      <button onClick={handleClick("prev")}>
        <img src={ChevronLeft} alt="<" />
      </button>
      <button onClick={handleClick("next")} className={styles["right-button"]}>
        <img src={ChevronRight} alt=">" />
      </button>
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
