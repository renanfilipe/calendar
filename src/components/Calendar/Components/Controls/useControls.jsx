import useModal from "components/shared/Modal/useModal";

import getMonthNameFromNumber from "./utils/getMonthNameFromNumber";

function useControls({ month, setMonth, setYear }) {
  const {
    isReminderModalOpen,
    handleReminderModalClose,
    handleReminderModalOpen,
  } = useModal("ReminderModal");

  const monthName = getMonthNameFromNumber(month);

  function handleMonthClick(direction) {
    return () => {
      const newMonth = direction === "prev" ? month - 1 : month + 1;
      if (newMonth < 0) {
        setMonth(11);
        setYear((state) => state - 1);
        return;
      }

      if (newMonth > 11) {
        setMonth(0);
        setYear((state) => state + 1);
        return;
      }

      setMonth(newMonth);
    };
  }

  return {
    handleMonthClick,
    handleReminderModalClose,
    handleReminderModalOpen,
    isReminderModalOpen,
    monthName,
  };
}

export default useControls;
