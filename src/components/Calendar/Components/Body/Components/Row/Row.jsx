import React from "react";

import Cell from "./components/Cell/Cell";
import isToday from "./utils/isToday";

function Row({ data, rowNumber }) {
  return (
    <tr>
      {data.map(({ day, month, year, isCurrentMonth }, index) => (
        <Cell
          key={`cell-${rowNumber}-${day}`}
          dataTestId={`cell-${rowNumber}-${index}`}
          day={day}
          month={month}
          year={year}
          isCurrentMonth={isCurrentMonth}
          isWeekend={index === 0 || index === 6}
          isToday={isToday(day, month, year)}
        />
      ))}
    </tr>
  );
}

export default Row;
