import { useCallback } from "react";
import { useSelector } from "react-redux";

import useModal from "components/shared/Modal/useModal";
import { toast } from "components/shared/Toast/Toast";
import useCalendarActions from "reducers/calendar/actions";

function useDetailsModal({ reminder, closeModal, closeOtherModals }) {
  const { removeReminder } = useCalendarActions();
  const activeDay = useSelector(({ calendar }) => calendar.activeDay);
  const formattedDate = new Date(...activeDay.split("-")).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      hour: "numeric",
    }
  );

  const {
    isReminderModalOpen,
    handleReminderModalClose,
    handleReminderModalOpen,
  } = useModal("ReminderModal");

  const {
    isConfirmModalOpen,
    handleConfirmModalClose,
    handleConfirmModalOpen,
  } = useModal("ConfirmModal");

  const handleEdit = useCallback(() => {
    handleReminderModalOpen();
  }, [handleReminderModalOpen]);

  const handleDelete = useCallback(() => {
    removeReminder({
      ...reminder,
      date: new Date(...reminder.date.split("-")),
    });
    toast("Reminder removed successfully!", { type: "success" });
    handleConfirmModalClose();
    closeModal();
    closeOtherModals.forEach((func) => func());
  }, [
    closeModal,
    closeOtherModals,
    handleConfirmModalClose,
    reminder,
    removeReminder,
  ]);

  return {
    formattedDate,
    handleConfirmModalClose,
    handleConfirmModalOpen,
    handleDelete,
    handleEdit,
    handleReminderModalClose,
    isConfirmModalOpen,
    isReminderModalOpen,
  };
}

export default useDetailsModal;
