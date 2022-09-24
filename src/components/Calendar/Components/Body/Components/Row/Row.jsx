import React from "react";

import Cell from "./Components/Cell/Cell";
import isToday from "./Utils/isToday";

function Row({ data, rowNumber }) {
  return (
    <tr>
      {data.map(({ day, month, year, isCurrentMonth }, index) => (
        <Cell
          key={`cell-${rowNumber}-${day}`}
          value={day}
          isCurrentMonth={isCurrentMonth}
          isWeekend={index === 0 || index === 6}
          isToday={isToday(day, month, year)}
        />
      ))}
    </tr>
  );
}

export default Row;
