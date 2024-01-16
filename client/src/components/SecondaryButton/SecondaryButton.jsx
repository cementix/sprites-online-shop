import React from "react";
import styles from "./SecondaryButton.module.scss";

const SecondaryButton = ({ children, width }) => {
  return (
    <button
      className={styles.secondaryButton}
      style={{ width: width ? width : "300px" }}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
