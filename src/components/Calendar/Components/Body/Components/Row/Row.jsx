import React from "react";

import Cell from "./Components/Cell/Cell";

function Row({ data, rowNumber }) {
  return (
    <tr>
      {data.map(({ value, isCurrentMonth }, index) => (
        <Cell
          key={`cell-${rowNumber}-${value}`}
          value={value}
          isCurrentMonth={isCurrentMonth}
          isWeekend={index === 0 || index === 6}
        />
      ))}
    </tr>
  );
}

export default Row;
