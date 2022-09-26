import React, { Fragment, useMemo } from "react";

import Button from "components/shared/Button/Button";
import DatePicker from "components/shared/DatePicker/DatePicker";
import Input from "components/shared/Input/Input";
import Modal from "components/shared/Modal/Modal";
import Select from "components/shared/Select/Select";
import { func, array } from "prop-types";
import { string } from "prop-types";

import styles from "./ReminderModal.module.scss";
import useReminderModal from "./useReminderModal";
import loadCityOptions from "./utils/loadCityOptions";

function ReminderModal(props) {
  const { closeModal } = props;
  const {
    canSave,
    city,
    content,
    date,
    handleCityChange,
    handleContentChange,
    handleDateChange,
    handleSave,
    isEditMode,
    isLoadingWeather,
  } = useReminderModal(props);

  const header = useMemo(
    () => <h3>{isEditMode ? "Edit" : "Add"} reminder</h3>,
    [isEditMode]
  );

  const footer = useMemo(
    () => (
      <Fragment>
        <Button
          onClick={closeModal}
          variant="secondary"
          disabled={isLoadingWeather}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          className={styles.button}
          variant="success"
          disabled={!canSave || isLoadingWeather}
        >
          Save
        </Button>
      </Fragment>
    ),
    [canSave, closeModal, handleSave, isLoadingWeather]
  );

  return (
    <Modal
      closeModal={closeModal}
      header={header}
      footer={footer}
      className={styles.modal}
      isLoading={isLoadingWeather}
    >
      <Input
        label="Content"
        onChange={handleContentChange}
        value={content}
        disabled={isLoadingWeather}
      />
      <DatePicker
        label="Date"
        selected={date}
        onChange={handleDateChange}
        disabled={isLoadingWeather}
        className={styles.input}
      />
      <DatePicker
        label="Time"
        className={styles.input}
        selected={date}
        onChange={handleDateChange}
        showTimeSelectOnly
        disabled={isLoadingWeather}
      />
      <Select
        label="City"
        onChange={handleCityChange}
        loadOptions={loadCityOptions}
        defaultValue={city}
        className={styles.input}
        disabled={isLoadingWeather}
      />
    </Modal>
  );
}

ReminderModal.propTypes = {
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
