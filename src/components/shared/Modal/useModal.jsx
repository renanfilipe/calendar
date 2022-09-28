import { useState, useCallback } from "react";

function useModal(name) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return {
    [`is${name}Open`]: isOpen,
    [`handle${name}Close`]: handleClose,
    [`handle${name}Open`]: handleOpen,
  };
}

export default useModal;
