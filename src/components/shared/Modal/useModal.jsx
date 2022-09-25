import { useState } from "react";

function useModal(name) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  return {
    [`is${name}Open`]: isOpen,
    [`handle${name}Close`]: handleClose,
    [`handle${name}Open`]: handleOpen,
  };
}

export default useModal;
