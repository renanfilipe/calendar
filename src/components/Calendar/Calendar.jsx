import React, { useState } from "react";

import styles from "./Calendar.module.scss";
import Body from "./Components/Body/Body";
import Controls from "./Components/Controls/Controls";
import Header from "./Components/Header/Header";

function Calendar() {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(2022);

  return (
    <div>
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
