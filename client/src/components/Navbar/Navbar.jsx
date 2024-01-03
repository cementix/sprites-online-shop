import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import {
  INFO_ROUTE,
  LANDING_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../../utils/consts";

const Navbar = ({ isVisible, isScrolled }) => {
  return (
    <nav
      className={`${styles.navbar} ${isVisible ? styles.visible : ""} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <Link className={styles.logo} to={LANDING_ROUTE}>
        SpriteSpot
      </Link>
      <ul>
        <Link className={styles.link} to={SHOP_ROUTE}>
          CATALOG
        </Link>
        <Link className={styles.link} to={INFO_ROUTE}>
          INFO
        </Link>
        <Link
          className={`${styles.link} ${styles.startButton}`}
          to={REGISTRATION_ROUTE}
        >
          GET STARTED
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
