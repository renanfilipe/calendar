import React from "react";

import classnames from "classnames";
import { any, string } from "prop-types";

import styles from "./Input.module.scss";

function Input({
  children,
  label,
  className,
  variant,
  errorMessage,
  dataTestId,
  ...rest
}) {
  return (
    <div
      className={classnames(
        styles.input,
        errorMessage && styles.error,
        className
      )}
    >
      <label
        onClick={(e) => e.preventDefault()}
        className={styles.label}
        data-testid={children ? dataTestId : undefined}
      >
        <span>{label}</span>
        {children ? children : <input {...rest} data-testid={dataTestId} />}
        {errorMessage && (
          <span className={styles["error-message"]}>{errorMessage}</span>
        )}
      </label>
    </div>
  );
}

Input.propTypes = {
  children: any,
  label: string.isRequired,
  className: string,
  variant: string,
  errorMessage: string,
};

Input.defaultProps = {
  children: undefined,
  className: undefined,
  variant: undefined,
  errorMessage: undefined,
};

export default React.memo(Input);
