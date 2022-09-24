import React from "react";

import Calendar from "components/Calendar/Calendar";

import styles from "./CalendarPage.module.scss";

function CalendarPage() {
  return (
    <div className={styles["calendar-page"]}>
      <Calendar />
    </div>
  );
}

export default CalendarPage;
