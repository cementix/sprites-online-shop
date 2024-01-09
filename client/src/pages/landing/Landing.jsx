import React, { useEffect, useState } from "react";
import logo from "../../assets/images/mainLogo.svg";
import styles from "./Landing.module.scss";
import TypeWriterEffect from "react-typewriter-effect";

const Landing = () => {
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);
  const [isMottoVisible, setisMottoVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLogoAnimated(true);
    }, 1000);

    const mottoTimeoutId = setTimeout(() => {
      setisMottoVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(mottoTimeoutId);
    };
  }, []);

  return (
    <div className="page">
      <div className={styles.hero}>
        <img
          src={logo}
          className={`${styles.logo} ${isLogoAnimated ? styles.animated : ""}`}
        />
        <TypeWriterEffect
          textStyle={{ fontFamily: "Josefin Sans" }}
          startDelay={400}
          text="SpriteSpot"
          typeSpeed={100}
          className={styles.heroName}
        />
        <h5
          className={`${styles.fadeMotto} ${
            isMottoVisible ? styles.visible : ""
          }`}
        >
          Unleash your imagination!
        </h5>
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.infoBlock}>
          <h3></h3>
        </div>
        <div className={styles.infoBlock}></div>
      </div>
    </div>
  );
};

export default Landing;
