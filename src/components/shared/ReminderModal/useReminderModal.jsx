import { useState, useCallback } from "react";

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
  };
}

export default useReminderModal;
