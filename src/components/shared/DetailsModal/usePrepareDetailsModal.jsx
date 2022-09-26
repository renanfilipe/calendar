import { useState } from "react";

import useModal from "components/shared/Modal/useModal";
import useCalendarActions from "reducers/calendar/actions";

function usePrepareDetailsModal() {
  const { setActiveDay } = useCalendarActions();
  const [selectedReminder, setSelectedReminder] = useState({});

  const {
    isDetailsModalOpen,
    handleDetailsModalClose,
    handleDetailsModalOpen,
  } = useModal("DetailsModal");

  function handleTagClick(reminder) {
    return () => {
      setActiveDay(reminder.date);
      setSelectedReminder(reminder);
      handleDetailsModalOpen();
    };
  }

  return {
    handleTagClick,
    isDetailsModalOpen,
    handleDetailsModalClose,
    selectedReminder,
  };
}

export default usePrepareDetailsModal;
