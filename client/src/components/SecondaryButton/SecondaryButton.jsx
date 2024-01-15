import React from "react";
import styles from "./SecondaryButton.module.scss";

const SecondaryButton = ({ text, width }) => {
  return (
    <button
      className={styles.secondaryButton}
      style={{ width: width ? width : "300px" }}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
