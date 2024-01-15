import React from "react";
import styles from "./MainInput.module.scss";

const MainInput = ({ type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className={styles.mainInput} />
  );
};

export default MainInput;
