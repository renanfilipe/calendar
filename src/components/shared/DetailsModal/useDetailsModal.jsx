import { useState } from "react";

import useModal from "components/shared/Modal/useModal";

function useDetailsModal({ day, month, year }) {
  const [selectedReminder, setSelectedReminder] = useState({});

  const {
    isDetailsModalOpen,
    handleDetailsModalClose,
    handleDetailsModalOpen,
  } = useModal("DetailsModal");

  function handleTagClick(reminder) {
    return () => {
      setSelectedReminder(reminder);
      handleDetailsModalOpen();
    };
  }

  const date = new Date(year, month, day);
  const monthPlusDay = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return {
    handleTagClick,
    isDetailsModalOpen,
    handleDetailsModalClose,
    selectedReminder,
    monthPlusDay,
  };
}

export default useDetailsModal;
