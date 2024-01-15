import React from "react";
import styles from "./MainButton.module.scss";

const MainButton = ({ text, width }) => {
  return (
    <button
      className={styles.mainButton}
      style={{ width: width ? width : "300px" }}
    >
      {text}
    </button>
  );
};

export default MainButton;
