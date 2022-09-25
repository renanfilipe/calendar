import React, { Fragment } from "react";

import Button from "components/shared/Button/Button";
import useModal from "components/shared/Modal/useModal";
import ReminderModal from "components/shared/ReminderModal/ReminderModal";
import { number, func } from "prop-types";

import styles from "./Controls.module.scss";
import getMonthNameFromNumber from "./utils/getMonthNameFromNumber";

function Controls({ month, setMonth, year, setYear }) {
  const {
    isReminderModalOpen,
    handleReminderModalClose,
    handleReminderModalOpen,
  } = useModal("ReminderModal");

  const monthName = getMonthNameFromNumber(month);

  function handleMonthClick(direction) {
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

  return (
    <Fragment>
      <div className={styles.controls}>
        <div className={styles["left-side"]}>
          <Button
            onClick={handleMonthClick("prev")}
            icon="chevronLeft"
            alt="previous month"
            variant="light"
          />
          <Button
            onClick={handleMonthClick("next")}
            icon="chevronRight"
            alt="next month"
            className={styles["right-button"]}
            variant="light"
          />
          <h1 className={styles.title}>
            {monthName} of {year}
          </h1>
        </div>
        <Button onClick={handleReminderModalOpen} variant="primary">
          Add reminder
        </Button>
      </div>
      {isReminderModalOpen && (
        <ReminderModal
          isOpen={isReminderModalOpen}
          closeModal={handleReminderModalClose}
        />
      )}
    </Fragment>
  );
}

Controls.propTypes = {
  month: number.isRequired,
  setMonth: func.isRequired,
  year: number.isRequired,
  setYear: func.isRequired,
};

export default Controls;
