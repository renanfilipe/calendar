import { useCallback } from "react";

import useModal from "components/shared/Modal/useModal";

import getMonthNameFromNumber from "./utils/getMonthNameFromNumber";

function useControls({ month, setMonth, setYear }) {
  const {
    isReminderModalOpen,
    handleReminderModalClose,
    handleReminderModalOpen,
  } = useModal("ReminderModal");

  const monthName = getMonthNameFromNumber(month);

  const calculateMonth = useCallback(
    (newMonth) => {
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
    },
    [setMonth, setYear]
  );

  const handlePrevClick = useCallback(() => {
    calculateMonth(month - 1);
  }, [calculateMonth, month]);

  const handleNextClick = useCallback(() => {
    calculateMonth(month + 1);
  }, [calculateMonth, month]);

  return {
    handleNextClick,
    handlePrevClick,
    handleReminderModalClose,
    handleReminderModalOpen,
    isReminderModalOpen,
    monthName,
  };
}

export default useControls;
