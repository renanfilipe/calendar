import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";

import Button from "components/shared/Button/Button";
import Input from "components/shared/Input/Input";
import Modal from "components/shared/Modal/Modal";
import { toast } from "components/shared/Toast/Toast";
import { bool, func } from "prop-types";
import { string } from "prop-types";

import styles from "./ReminderModal.module.scss";

function ReminderModal({
  isOpen,
  closeModal,
  date: initialDate,
  city: initialCity,
  content: initialContent,
}) {
  const [content, setContent] = useState(initialContent);
  const [date, setDate] = useState(() => {
    if (initialDate) {
      return new Date(...initialDate.split("-"));
    }
  });
  const [city, setCity] = useState(initialCity);

  const canSave = !!content && !!date && !!city;

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleDateChange(date) {
    setDate(date);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleSave() {
    toast("Saved!", { type: "success" });
    closeModal();
  }

  const header = <h3>{initialContent ? "Edit" : "Add"} reminder</h3>;
  const footer = (
    <Fragment>
      <Button onClick={closeModal} variant="secondary">
        Cancel
      </Button>
      <Button
        onClick={handleSave}
        className={styles.button}
        variant="success"
        disabled={!canSave}
      >
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
      <Input label="Content" onChange={handleContentChange} value={content} />
      <Input label="Date">
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          timeIntervals="60"
        />
      </Input>
      <Input label="Time">
        <DatePicker
          selected={date}
          onChange={handleDateChange}
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
  isOpen: bool.isRequired,
  closeModal: func.isRequired,
  date: string,
  city: string,
  content: string,
};

ReminderModal.defaultProps = {
  date: undefined,
  city: "",
  content: "",
};

export default ReminderModal;
