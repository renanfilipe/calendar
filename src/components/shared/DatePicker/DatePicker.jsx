import React from "react";
import ReactDatePicker from "react-datepicker";

import Input from "components/shared/Input/Input";
import { string } from "prop-types";

import popperModifiers from "./constants/popperModifiers";

function DatePicker({ label, className, showTimeSelectOnly, ...rest }) {
  const timeSelectOnlyProps = showTimeSelectOnly
    ? {
        showTimeSelect: true,
        showTimeSelectOnly: true,
        timeIntervals: "60",
        timeCaption: "Time",
        dateFormat: "h:mm aa",
        popperModifiers,
      }
    : {};

  return (
    <Input label={label} className={className}>
      <ReactDatePicker {...timeSelectOnlyProps} {...rest} />
    </Input>
  );
}

DatePicker.propTypes = {
  label: string.isRequired,
  className: string.isRequired,
};

export default React.memo(DatePicker);
