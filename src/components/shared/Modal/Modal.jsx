import React from "react";
import ReactModal from "react-modal";

import classnames from "classnames";
import Button from "components/shared/Button/Button";
import { func, node, oneOfType, string } from "prop-types";

import customStyles from "./constants/customStyles";
import styles from "./Modal.module.scss";

ReactModal.setAppElement("#root");

function Modal({ closeModal, children, header, footer, className }) {
  return (
    <ReactModal isOpen onRequestClose={closeModal} style={customStyles}>
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
  closeModal: func.isRequired,
  children: node.isRequired,
  header: oneOfType([node, string]),
  footer: oneOfType([node, string]),
};

export default React.memo(Modal);
