import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";

import classnames from "classnames";
import Button from "components/shared/Button/Button";
import Input from "components/shared/Input/Input";
import Modal from "components/shared/Modal/Modal";
import { toast } from "components/shared/Toast/Toast";
import { string } from "prop-types";

import styles from "./ReminderModal.module.scss";

function ReminderModal({ isOpen, closeModal }) {
  const [content, setContent] = useState("");
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [city, setCity] = useState("");

  function handleReminderChange(event) {
    setContent(event.target.value);
  }

  function handleDateChange(date) {
    setDate(date);
  }

  function handleTimeChange(time) {
    setTime(time);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSave() {
    toast("Saved!", { type: "success" });
    closeModal();
  }

  const header = <h3>Add a reminder</h3>;
  const footer = (
    <Fragment>
      <Button onClick={closeModal} variant="secondary">
        Cancel
      </Button>
      <Button onClick={handleSave} className={styles.button} variant="success">
        Save
      </Button>
    </Fragment>
  );

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      header={header}
      footer={footer}
      className={styles.modal}
    >
      <Input label="Reminder" onChange={handleReminderChange} value={content} />
      <Input label="Date">
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          timeIntervals="60"
        />
      </Input>
      <Input label="Time">
        <DatePicker
          selected={time}
          onChange={handleTimeChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals="60"
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      </Input>
      <Input label="City" onChange={handleCityChange} value={city} />
    </Modal>
  );
}

ReminderModal.propTypes = {
  content: string,
};

export default ReminderModal;
