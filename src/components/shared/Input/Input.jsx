import React from "react";

import classnames from "classnames";
import { any, string } from "prop-types";

import styles from "./Input.module.scss";

function Input({ children, label, className, variant, ...rest }) {
  return (
    <div className={classnames(styles.input, className)}>
      <label onClick={(e) => e.preventDefault()} className={styles.label}>
        <span>{label}</span>
        {children ? children : <input {...rest} />}
      </label>
    </div>
  );
}

Input.propTypes = {
  children: any,
  label: string.isRequired,
  className: string,
  variant: string,
};

Input.defaultProps = {
  children: undefined,
  className: undefined,
  variant: undefined,
};

export default Input;
