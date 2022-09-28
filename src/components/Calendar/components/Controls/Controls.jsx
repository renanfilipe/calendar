import React, { Fragment } from "react";

import Button from "components/shared/Button/Button";
import ReminderModal from "components/shared/ReminderModal/ReminderModal";
import { number, func } from "prop-types";

import styles from "./Controls.module.scss";
import useControls from "./useControls";

function Controls({ year, ...props }) {
  const {
    handleNextClick,
    handlePrevClick,
    handleReminderModalClose,
    handleReminderModalOpen,
    isReminderModalOpen,
    monthName,
  } = useControls(props);

  return (
    <Fragment>
      <div className={styles.controls}>
        <div className={styles["left-side"]}>
          <Button
            onClick={handlePrevClick}
            icon="chevronLeft"
            alt="previous month"
            variant="light"
          />
          <Button
            onClick={handleNextClick}
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
        <ReminderModal closeModal={handleReminderModalClose} />
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
