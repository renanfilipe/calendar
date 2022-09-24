import React from "react";

import Cell from "./Components/Cell/Cell";
import isToday from "./Utils/isToday";

const state = {
  "2022-0-3": {
    "8:00": [
      {
        id: "2022-0-3 8:00 1",
        content: "2022-0-3 8:00 1",
        city: "Washington",
      },
      {
        id: "2022-0-3 8:00 2",
        content: "2022-0-3 8:00 2",
        city: "Washington",
      },
    ],
    "9:00": [
      {
        id: "2022-0-3 9:00 1",
        content: "2022-0-3 9:00 1",
        city: "New York",
      },
    ],
    "10:00": [
      {
        id: "2022-0-3 10:00 1",
        content: "2022-0-3 10:00 1",
        city: "Salem",
      },
      {
        id: "2022-0-3 10:00 2",
        content: "2022-0-3 10:00 2",
        city: "Salem",
      },
    ],
  },
  "2022-0-5": {
    "11:00": [
      {
        id: "2022-0-5 11:00 1",
        content: "2022-0-5 11:00 1",
        city: "Washington",
      },
    ],
    "14:00": [
      {
        id: "2022-0-5 14:00 1",
        content: "2022-0-5 14:00 1",
        city: "New York",
      },
    ],
    "18:00": [
      {
        id: "2022-0-5 18:00 1",
        content: "2022-0-5 18:00 1",
        city: "Salem",
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
