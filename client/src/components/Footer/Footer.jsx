import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerBlock}>
        <div className={styles.blockHeader}>
          <h5>About</h5>
          <ul>
            <li>
              <p></p>
              <i></i>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBlock}>
        <div className={styles.blockHeader}>
          <h5>Information</h5>
        </div>
      </div>
      <div className={styles.footerBlock}>
        <div className={styles.blockHeader}>
          <h5>Social media</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
