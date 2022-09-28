import React from "react";

import styles from "./Header.module.scss";

function Header() {
  return (
    <thead className={styles.header}>
      <tr>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
      </tr>
    </thead>
  );
}

export default Header;
