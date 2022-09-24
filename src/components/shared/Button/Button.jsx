import React from "react";

import chevronLeft from "assets/icons/chevronLeft.svg";
import chevronRight from "assets/icons/chevronRight.svg";
import close from "assets/icons/close.svg";
import classnames from "classnames";
import { oneOf, any } from "prop-types";

import styles from "./Button.module.scss";

function Button({ icon, children, variant, className, ...rest }) {
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
      {icon && <img src={getIcon(icon)} alt={icon} />}
      {children}
    </button>
  );
}

Button.propTypes = {
  icon: oneOf(["close", "chevronLeft", "chevronRight"]),
  variant: oneOf(["circular", "ghost", "primary", "secondary"]),
  children: any,
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
