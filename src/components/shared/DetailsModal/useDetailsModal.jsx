import { useState } from "react";

import useModal from "components/shared/Modal/useModal";

function useDetailsModal({ day, month, year }) {
  const [selectedReminder, setSelectedReminder] = useState({});

  const {
    isOpen: isDetailsModalOpen,
    handleClose: handleCloseDetailsModal,
    handleOpen: handleOpenDetailsModal,
  } = useModal();

  function handleTagClick(reminder) {
    return () => {
      setSelectedReminder(reminder);
      handleOpenDetailsModal();
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
    handleCloseDetailsModal,
    selectedReminder,
    monthPlusDay,
  };
}

export default useDetailsModal;
