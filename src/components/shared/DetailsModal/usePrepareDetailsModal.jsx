import { useState, useCallback } from "react";

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

  const handleTagClick = useCallback(
    (reminder) => () => {
      setActiveDay(reminder.date);
      setSelectedReminder(reminder);
      handleDetailsModalOpen();
    },
    [handleDetailsModalOpen, setActiveDay]
  );

  return {
    handleTagClick,
    isDetailsModalOpen,
    handleDetailsModalClose,
    selectedReminder,
  };
}

export default usePrepareDetailsModal;
