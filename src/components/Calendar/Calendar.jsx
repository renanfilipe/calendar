import React from "react";

import styles from "./Calendar.module.scss";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";

function Calendar() {
  return (
    <div className={styles.calendar}>
      <table>
        <Header />
        <Body />
      </table>
    </div>
  );
}

export default Calendar;
