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
      burgerRef.current.setSpeed(2.5);
    }
    setIsPlayingForward(!isPlayingForward);
    setIsMenuActive(!isMenuActive);
  };

  const items = [{ value: "Home", link: LANDING_ROUTE, icon: "anchor" }];

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
        style={{ width: 100, height: 100, cursor: "pointer" }}
        lottieRef={burgerRef}
        loop={false}
        onClick={handleBurgerClick}
        autoplay={false}
        className={styles.burgerButton}
      />
      <Menu header={"Menu"} items={items} isActive={isMenuActive} />
    </nav>
  );
};

export default Navbar;
