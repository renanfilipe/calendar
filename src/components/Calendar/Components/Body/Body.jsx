import React from "react";

import { number } from "prop-types";

import styles from "./Body.module.scss";
import Row from "./Components/Row/Row";
import generateCalendarDays from "./Utils/generateCalendarDays";

const numberOfRows = 5;
const numberOfDaysInAWeek = 7;

function Body({ month, year }) {
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

Body.propTypes = {
  month: number.isRequired,
  year: number.isRequired,
};

export default Body;
