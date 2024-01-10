import React from "react";
import styles from "./QualityBlock.module.scss";

const QualityBlock = ({ header, icon }) => {
  return (
    <div className={styles.blockWrapper}>
      <div className={styles.blockIcon}>
        <i className="material-icons">{icon}</i>
      </div>
      <p>{header}</p>
    </div>
  );
};

export default QualityBlock;
