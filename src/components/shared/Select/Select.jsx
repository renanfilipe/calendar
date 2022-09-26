import React from "react";
import AsyncSelect from "react-select/async";

import classnames from "classnames";
import Input from "components/shared/Input/Input";
import { string } from "prop-types";

import styles from "./Select.module.scss";

function Select({ label, className, ...rest }) {
  return (
    <Input label={label} className={classnames(styles.select, className)}>
      <AsyncSelect cacheOptions {...rest} />
    </Input>
  );
}

Select.propTypes = {
  className: string,
  label: string.isRequired,
};

Select.defaultProps = {
  className: undefined,
};

export default React.memo(Select);
