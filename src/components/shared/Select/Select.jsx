import React from "react";
import AsyncSelect from "react-select/async";

import classnames from "classnames";
import Input from "components/shared/Input/Input";
import { string, bool } from "prop-types";

import styles from "./Select.module.scss";

function Select({ label, className, disabled, ...rest }) {
  return (
    <Input label={label} className={classnames(styles.select, className)}>
      <AsyncSelect cacheOptions isDisabled={disabled} {...rest} />
    </Input>
  );
}

Select.propTypes = {
  className: string,
  label: string.isRequired,
  disabled: bool,
};

Select.defaultProps = {
  className: undefined,
  disabled: undefined,
};

export default React.memo(Select);
