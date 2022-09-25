import React from "react";

import chevronLeft from "assets/icons/chevronLeft.svg";
import chevronRight from "assets/icons/chevronRight.svg";
import close from "assets/icons/close.svg";
import classnames from "classnames";
import { oneOf, any, string } from "prop-types";

import styles from "./Button.module.scss";

function Button({ icon, alt, children, variant, className, ...rest }) {
  function getIcon(icon) {
    const icons = {
      chevronLeft,
      chevronRight,
      close,
    };

    return icons[icon];
  }

  return (
    <button
      className={classnames(styles.button, styles[variant], className)}
      {...rest}
    >
      {icon && <img src={getIcon(icon)} alt={alt} className={styles.icon} />}
      {children}
    </button>
  );
}

Button.propTypes = {
  icon: oneOf(["close", "chevronLeft", "chevronRight"]),
  variant: oneOf([
    "danger",
    "ghost",
    "light",
    "primary",
    "secondary",
    "secondary",
    "success",
  ]),
  alt: string,
  children: any,
};

Button.defaultProps = {
  variant: "primary",
  alt: undefined,
};

export default Button;
