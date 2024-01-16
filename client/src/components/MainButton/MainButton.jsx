import React from "react";
import styles from "./MainButton.module.scss";

const MainButton = ({ children, width }) => {
  return (
    <button
      className={styles.mainButton}
      style={{ width: width ? width : "300px" }}
    >
      {children}
    </button>
  );
};

export default MainButton;
