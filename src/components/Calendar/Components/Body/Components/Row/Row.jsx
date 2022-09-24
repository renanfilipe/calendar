import React from "react";

import Cell from "./Components/Cell/Cell";
import isToday from "./Utils/isToday";

function Row({ data, rowNumber }) {
  return (
    <tr>
      {data.map(({ day, month, year, isCurrentMonth }, index) => (
        <Cell
          key={`cell-${rowNumber}-${day}`}
          day={day}
          month={month}
          isCurrentMonth={isCurrentMonth}
          isWeekend={index === 0 || index === 6}
          isToday={isToday(day, month, year)}
          reminders={
            day === 10
              ? [
                  "is simply dummy text of the pr",
                  "is simply dummy text of the pr",
                  "is simply dummy text of the pr",
                  "is simply dummy text of the pr",
                ]
              : undefined
          }
        />
      ))}
    </tr>
  );
}

export default Row;
