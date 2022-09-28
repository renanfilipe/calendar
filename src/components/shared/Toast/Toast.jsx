import React from "react";
import { ToastContainer, toast as importedToast, Slide } from "react-toastify";

export const toast = importedToast;

function Toast() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      transition={Slide}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable={false}
      pauseOnHover
    />
  );
}

export default Toast;
