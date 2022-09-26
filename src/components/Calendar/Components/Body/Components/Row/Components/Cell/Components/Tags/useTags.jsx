import usePrepareDetailsModal from "components/shared/DetailsModal/usePrepareDetailsModal";
import useModal from "components/shared/Modal/useModal";
import useCalendarActions from "reducers/calendar/actions";

function useTags(reminders) {
  const { setActiveDay } = useCalendarActions();

  const {
    handleTagClick,
    isDetailsModalOpen,
    handleDetailsModalClose,
    selectedReminder,
  } = usePrepareDetailsModal();

  const { isMoreModalOpen, handleMoreModalClose, handleMoreModalOpen } =
    useModal("MoreModal");

  function handleMoreClick() {
    setActiveDay(reminders[0].date);
    handleMoreModalOpen();
  }

  const hasMore = reminders.length > 4;

  return {
    handleDetailsModalClose,
    handleMoreClick,
    handleMoreModalClose,
    handleTagClick,
    hasMore,
    isDetailsModalOpen,
    isMoreModalOpen,
    selectedReminder,
  };
}

export default useTags;
