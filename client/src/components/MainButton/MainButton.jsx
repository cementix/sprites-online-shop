import React from "react";
import styles from "./MainButton.module.scss";

const MainButton = ({ text }) => {
  return <button className={styles.mainButton}>{text}</button>;
};

export default MainButton;
