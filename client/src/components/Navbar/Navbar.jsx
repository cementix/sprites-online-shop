import React, { useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import {
  INFO_ROUTE,
  LANDING_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "../../utils/consts";
import Lottie from "lottie-react";
import burger from "../../assets/animations/burger.json";

const Navbar = ({ isVisible, isScrolled }) => {
  const burgerRef = useRef();

  const [isPlayingForward, setIsPlayingForward] = useState(true);

  const handleBurgerClick = () => {
    if (isPlayingForward) {
      burgerRef.current.playSegments([0, 60], true);
    } else {
      burgerRef.current.setDirection(-1);
      burgerRef.current.play();
    }
    setIsPlayingForward(!isPlayingForward);
  };

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
      <Lottie
        animationData={burger}
        style={{ width: 100, height: 100, cursor: "pointer" }}
        lottieRef={burgerRef}
        loop={false}
        onClick={handleBurgerClick}
      />
    </nav>
  );
};

export default Navbar;
