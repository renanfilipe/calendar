import React from "react";

import Cell from "./components/Cell/Cell";
import isToday from "./utils/isToday";

const state = {
  "2022-0-3": {
    "8:00": [
      {
        id: "2022-0-3 8:00 1",
        content: "2022-0-3 8:00 1",
        city: "Washington",
        date: "2022-0-3-8",
      },
      {
        id: "2022-0-3 8:00 2",
        content: "2022-0-3 8:00 2",
        city: "Washington",
        date: "2022-0-3-8",
      },
    ],
    "9:00": [
      {
        id: "2022-0-3 9:00 1",
        content: "2022-0-3 9:00 1",
        city: "New York",
        date: "2022-0-3-9",
      },
    ],
    "10:00": [
      {
        id: "2022-0-3 10:00 1",
        content: "2022-0-3 10:00 1",
        city: "Salem",
        date: "2022-0-3-10",
      },
      {
        id: "2022-0-3 10:00 2",
        content: "2022-0-3 10:00 2",
        city: "Salem",
        date: "2022-0-3-10",
      },
    ],
  },
  "2022-0-5": {
    "11:00": [
      {
        id: "2022-0-5 11:00 1",
        content: "2022-0-5 11:00 1",
        city: "Washington",
        date: "2022-0-5-11",
      },
    ],
    "14:00": [
      {
        id: "2022-0-5 14:00 1",
        content: "2022-0-5 14:00 1",
        city: "New York",
        date: "2022-0-5-14",
      },
    ],
    "18:00": [
      {
        id: "2022-0-5 18:00 1",
        content: "2022-0-5 18:00 1",
        city: "Salem",
        date: "2022-0-5-18",
      },
    ],
  },
};

function getReminders(day, month, year) {
  const reminders = state[`${year}-${month}-${day}`];

  if (!reminders) {
    return;
  }

  return Object.keys(reminders).reduce(
    (acc, key) => [...acc, ...reminders[key]],
    []
  );
}

function Row({ data, rowNumber }) {
  return (
    <tr>
      {data.map(({ day, month, year, isCurrentMonth }, index) => (
        <Cell
          key={`cell-${rowNumber}-${day}`}
          day={day}
          month={month}
          year={year}
          isCurrentMonth={isCurrentMonth}
          isWeekend={index === 0 || index === 6}
          isToday={isToday(day, month, year)}
          reminders={getReminders(day, month, year)}
        />
      ))}
    </tr>
  );
}

export default Row;
