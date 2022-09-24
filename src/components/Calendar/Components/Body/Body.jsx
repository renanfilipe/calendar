import React from "react";

import styles from "./Body.module.scss";
import Row from "./Components/Row/Row";
import generateCalendarDays from "./Utils/generateCalendarDays";

const numberOfRows = 5;
const numberOfDaysInAWeek = 7;

function Body() {
  const month = 11;
  const year = 2022;
  const data = generateCalendarDays(month, year);

  function renderRows(data) {
    const rows = [];

    for (let i = 0; i < numberOfRows; i++) {
      rows.push(
        <Row
          key={`row-${i}`}
          data={data.slice(
            i * numberOfDaysInAWeek,
            i * numberOfDaysInAWeek + numberOfDaysInAWeek
          )}
          rowNumber={i}
        />
      );
    }

    return rows;
  }

  return <tbody className={styles.body}>{renderRows(data)}</tbody>;
}

export default Body;
