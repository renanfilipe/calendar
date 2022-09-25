import React from "react";

import { any, string } from "prop-types";

import styles from "./Input.module.scss";

function Input({ children, label, ...rest }) {
  return (
    <div className={styles.input}>
      <label onClick={(e) => e.preventDefault()}>
        <span className={styles.label}>{label}</span>
        {children ? children : <input {...rest} />}
      </label>
    </div>
  );
}

Input.propTypes = {
  children: any,
  label: string.isRequired,
};

export default Input;
