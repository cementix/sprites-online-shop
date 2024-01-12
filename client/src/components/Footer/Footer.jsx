import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerBlock}>
        <h5 className={styles.footerHeader}>About</h5>
        <ul className={styles.footerContent}>
          <li>
            <i className="material-icons">place</i>
            <p>123 Ipsum Street, Lorem City, IP 45678, Loremland.</p>
          </li>
          <li>
            <i className="material-icons">phone</i>
            <p>(123) 456-7890</p>
          </li>
          <li>
            <i className="material-icons">mail</i>
            <p>spritespot@lorenipsum.com</p>
          </li>
        </ul>
      </div>

      <div className={styles.footerBlock}>
        <h5 className={styles.footerHeader}>Info</h5>
        <ul className={styles.footerContent}>
          <li>
            <i className="material-icons">remove_red_eye</i>
            <Link>Cookie Policy</Link>
          </li>
          <li>
            <i className="material-icons">security</i>
            <Link>Privacy Policy</Link>
          </li>
          <li>
            <i className="material-icons">pan_tool</i>
            <Link>Terms & Conditions</Link>
          </li>
        </ul>
      </div>
      <div className={styles.footerBlock}>
        <h5 className={styles.footerHeader}>Social media</h5>
        <ul className={styles.footerContent}>
          <li href="">
            <i className="fa fa-instagram"></i>
            <p>@spriteSpotHQ</p>
          </li>
          <li href="">
            <i className="fa fa-facebook"></i>
            <p>@SpriteSpotSH</p>
          </li>
          <li href="">
            <i className="fa fa-twitter"></i>
            <p>@spriteSpotOfficial</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
