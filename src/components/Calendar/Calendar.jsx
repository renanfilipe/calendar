import React from "react";

import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";

import "./Calendar.scss";

function Calendar() {
  return (
    <div className="calendar">
      <table>
        <Header />
        <Body />
      </table>
    </div>
  );
}

export default Calendar;
