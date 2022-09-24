import React from "react";

import classnames from "classnames";
import Modal from "components/shared/Modal/Modal";
import Tag from "components/shared/Tag/Tag";
import { string } from "prop-types";

import styles from "./MoreModal.module.scss";

function MoreModal({ isOpen, closeModal, day, month, year, reminders }) {
  const date = new Date(year, month, day);
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
  var monthPlusDay = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const header = (
    <div className={styles.header}>
      <h4 className={styles.weekday}>{weekday}</h4>
      <h3 className={styles["month-plus-day"]}>{monthPlusDay}</h3>
    </div>
  );

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} header={header}>
      {reminders.map(({ id, content }, index) => (
        <Tag
          key={id}
          content={content}
          className={classnames(index !== 0 && styles.tag)}
        />
      ))}
    </Modal>
  );
}

MoreModal.propTypes = {
  content: string,
};

export default MoreModal;
