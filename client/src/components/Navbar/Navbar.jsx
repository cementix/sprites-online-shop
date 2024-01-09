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
import Menu from "./Menu/Menu";

const Navbar = ({ isVisible, isScrolled }) => {
  const burgerRef = useRef();

  const [isPlayingForward, setIsPlayingForward] = useState(true);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleBurgerClick = () => {
    if (isPlayingForward) {
      burgerRef.current.playSegments([0, 60], true);
      burgerRef.current.setSpeed(1.2);
    } else {
      burgerRef.current.setDirection(-1);
      burgerRef.current.play();
      burgerRef.current.setSpeed(3);
    }
    setIsPlayingForward(!isPlayingForward);
    setIsMenuActive(!isMenuActive);
  };

  const items = [
    { value: "HOME", link: LANDING_ROUTE, icon: "home" },
    { value: "CATALOG", link: SHOP_ROUTE, icon: "shopping_cart" },
    { value: "AUTHORS", link: LANDING_ROUTE, icon: "people" },
    { value: "GET STARTED", link: LANDING_ROUTE, icon: "play_arrow" },
  ];

  return (
    <nav
      className={`${styles.navbar} ${isVisible ? styles.visible : ""} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <Link className={styles.logo} to={LANDING_ROUTE}>
        SpriteSpot
      </Link>

      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <i className="material-icons">arrow_forward</i>
        </button>
      </div>

      <Lottie
        animationData={burger}
        style={{ width: 70, height: 70, cursor: "pointer" }}
        lottieRef={burgerRef}
        loop={false}
        onClick={handleBurgerClick}
        autoplay={false}
        className={styles.burgerButton}
      />
      <Menu
        header={"Menu"}
        items={items}
        isActive={isMenuActive}
        handleBurgerClick={handleBurgerClick}
      />
    </nav>
  );
};

export default Navbar;
