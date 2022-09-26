import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

import { toast } from "components/shared/Toast/Toast";
import useCalendarActions from "reducers/calendar/actions";

function useReminderModal({
  closeModal,
  id,
  date: initialDate,
  city: initialCity,
  content: initialContent,
  closeOtherModals,
}) {
  const { addReminder, editReminder } = useCalendarActions();
  const isLoadingWeather = useSelector(
    ({ calendar }) => calendar.isLoadingWeather
  );
  const [content, setContent] = useState(initialContent);
  const [date, setDate] = useState(
    initialDate ? new Date(...initialDate.split("-")) : undefined
  );

  const [city, setCity] = useState(
    initialCity ? { value: initialCity, label: initialCity } : undefined
  );

  const isEditMode = !!initialContent;
  const canSave = !!content && !!date && !!city;

  const handleContentChange = useCallback((event) => {
    setContent(event.target.value);
  }, []);

  const handleDateChange = useCallback((date) => {
    setDate(date);
  }, []);

  const handleCityChange = useCallback((data) => {
    setCity(data);
  }, []);

  function handleSave() {
    const payload = {
      content,
      city: city.value,
      date,
    };

    function closeAllModals() {
      closeModal();
      closeOtherModals.forEach((func) => func());
    }

    function handleSuccess() {
      toast(`Reminder ${isEditMode ? "updated" : "created"} successfully!`, {
        type: "success",
      });
      closeAllModals();
    }

    function handleFailure() {
      closeAllModals();
    }

    if (isEditMode) {
      editReminder({ id, ...payload }, handleSuccess, handleFailure);
    } else {
      addReminder(payload, handleSuccess, handleFailure);
    }
  }

  return {
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
  };
}

export default useReminderModal;
