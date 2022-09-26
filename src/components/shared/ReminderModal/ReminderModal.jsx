import React, { Fragment, useState } from "react";

import Button from "components/shared/Button/Button";
import DatePicker from "components/shared/DatePicker/DatePicker";
import Input from "components/shared/Input/Input";
import Modal from "components/shared/Modal/Modal";
import Select from "components/shared/Select/Select";
import { toast } from "components/shared/Toast/Toast";
import { bool, func, array } from "prop-types";
import { string } from "prop-types";
import useCalendarActions from "reducers/calendar/actions";

import styles from "./ReminderModal.module.scss";
import loadCityOptions from "./utils/loadCityOptions";

function ReminderModal({
  isOpen,
  closeModal,
  id,
  date: initialDate,
  city: initialCity,
  content: initialContent,
  closeOtherModals,
}) {
  const { addReminder, editReminder } = useCalendarActions();
  const [content, setContent] = useState(initialContent);
  const [date, setDate] = useState(() => {
    if (initialDate) {
      return new Date(...initialDate.split("-"));
    }
  });
  const [city, setCity] = useState(
    initialCity ? { value: initialCity, label: initialCity } : undefined
  );

  const isEditMode = !!initialContent;
  const canSave = !!content && !!date && !!city;

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleDateChange(date) {
    setDate(date);
  }

  function handleCityChange(data) {
    setCity(data.value);
  }

  function handleSave() {
    const payload = {
      content,
      city,
      date,
    };
    if (isEditMode) {
      editReminder({ id, ...payload });
    } else {
      addReminder(payload);
    }
    toast(`Reminder ${isEditMode ? "updated" : "created"} successfully!`, {
      type: "success",
    });

    closeModal();
    closeOtherModals.forEach((func) => func());
  }

  const header = <h3>{isEditMode ? "Edit" : "Add"} reminder</h3>;
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
      <DatePicker
        label="Date"
        selected={date}
        onChange={handleDateChange}
        disabled={isEditMode}
        className={styles.input}
      />
      <DatePicker
        label="Time"
        className={styles.input}
        selected={date}
        onChange={handleDateChange}
        showTimeSelectOnly
        disabled={isEditMode}
      />
      <Select
        label="City"
        onChange={handleCityChange}
        loadOptions={loadCityOptions}
        defaultValue={city}
        className={styles.input}
      />
    </Modal>
  );
}

ReminderModal.propTypes = {
  isOpen: bool.isRequired,
  closeModal: func.isRequired,
  date: string,
  city: string,
  content: string,
  id: string,
  closeOtherModals: array,
};

ReminderModal.defaultProps = {
  date: undefined,
  city: "",
  content: "",
  id: undefined,
  closeOtherModals: [],
};

export default ReminderModal;
