import React, { useState } from "react";

import styles from "./Calendar.module.scss";
import Body from "./components/Body/Body";
import Controls from "./components/Controls/Controls";
import Header from "./components/Header/Header";

const todaysDate = new Date();
const initialYear = todaysDate.getFullYear();
const initialMonth = todaysDate.getMonth();

function Calendar() {
  const [month, setMonth] = useState(initialMonth);
  const [year, setYear] = useState(initialYear);

  return (
    <div className={styles.calendar}>
      <Controls
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
      />
      <table className={styles.table}>
        <Header />
        <Body month={month} year={year} />
      </table>
    </div>
  );
}

export default Calendar;
