import { useSelector } from "react-redux";

import usePrepareDetailsModal from "components/shared/DetailsModal/usePrepareDetailsModal";

function useMoreModal() {
  const activeDay = useSelector(({ calendar }) => calendar.activeDay);
  const date = new Date(...activeDay.split("-"));
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const {
    handleTagClick,
    isDetailsModalOpen,
    handleDetailsModalClose,
    selectedReminder,
    monthPlusDay,
  } = usePrepareDetailsModal();

  return {
    formattedDate,
    handleDetailsModalClose,
    handleTagClick,
    isDetailsModalOpen,
    monthPlusDay,
    selectedReminder,
    weekday,
  };
}

export default useMoreModal;
