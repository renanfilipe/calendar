import React from "react";
import ReactModal from "react-modal";

import classnames from "classnames";
import Button from "components/shared/Button/Button";
import { bool, func, node, oneOfType, string } from "prop-types";

import styles from "./Modal.module.scss";

ReactModal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
    overflow: "visible",
  },
  overlay: {
    background: "#80808066",
  },
};

function Modal({ isOpen, closeModal, children, header, footer, className }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className={classnames(styles.modal, className)}>
        <Button
          onClick={closeModal}
          icon="close"
          variant="ghost"
          className={styles.close}
        />
        {header && <div className={styles.header}>{header}</div>}
        <div className={styles.body}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </ReactModal>
  );
}

Modal.propTypes = {
  isOpen: bool.isRequired,
  closeModal: func.isRequired,
  children: node.isRequired,
  header: oneOfType([node, string]),
  footer: oneOfType([node, string]),
};

export default Modal;
