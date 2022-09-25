import { useState } from "react";

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  return {
    isOpen,
    handleClose,
    handleOpen,
  };
}

export default useModal;
