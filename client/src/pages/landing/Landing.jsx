import React, { useEffect, useState } from "react";
import logo from "../../assets/images/mainLogo.svg";
import "./Landing.scss";
import TypeWriterEffect from "react-typewriter-effect";
import Lottie from "lottie-react";
import artistAnimation from "../../assets/animations/artist.json";
import catalogAnimation from "../../assets/animations/catalog.json";
import MainButton from "../../components/MainButton/MainButton";

const Landing = () => {
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);
  const [isMottoVisible, setisMottoVisible] = useState(false);
  const [isCatalogVisible, setIsCatalogVisible] = useState(false);
  const [isArtistVisible, setIsArtistVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLogoAnimated(true);
    }, 1000);

    const mottoTimeoutId = setTimeout(() => {
      setisMottoVisible(true);
    }, 2000);

    const handleScroll = () => {
      const currentPosition = window.scrollY || window.pageYOffset;

      if (!isCatalogVisible) {
        const catalogElement = document.getElementById("catalogBlock");
        if (catalogElement) {
          const rectCatalog = catalogElement.getBoundingClientRect();
          setIsCatalogVisible(rectCatalog.top < window.innerHeight - 200);
        }
      }

      if (!isArtistVisible) {
        const artistElement = document.getElementById("artistBlock");
        if (artistElement) {
          const rectArtist = artistElement.getBoundingClientRect();
          setIsArtistVisible(rectArtist.top < window.innerHeight - 200);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(mottoTimeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isCatalogVisible, isArtistVisible]);

  return (
    <div className="page">
      <div className="hero">
        <img
          src={logo}
          className={`logo ${isLogoAnimated ? "animated" : ""}`}
        />
        <TypeWriterEffect
          textStyle={{ fontFamily: "Josefin Sans" }}
          startDelay={400}
          text="SpriteSpot"
          typeSpeed={100}
          className="heroName"
        />
        <h3 className={`fadeMotto ${isMottoVisible ? "visible" : ""}`}>
          Unleash your imagination!
        </h3>
      </div>

      <div className="infoWrapper">
        <div
          id="catalogBlock"
          className={`infoBlock ${isCatalogVisible ? "visible" : ""}`}
        >
          <div className="infoContent">
            <div className="infoText">
              <h4>EXPLORE CATALOG</h4>
              <p>
                Dive into our curated catalog of enchanting 2D sprites,
                meticulously designed to elevate your projects. Unleash your
                creativity with a diverse range of sprites.
              </p>
            </div>
            <Lottie
              animationData={catalogAnimation}
              className="infoAnimation"
            />
          </div>
          <MainButton text="CATALOG" className="infoButton" />
        </div>

        <div
          id="artistBlock"
          className={`infoBlock ${isArtistVisible ? "visible" : ""}`}
        >
          <div className="infoContent">
            <Lottie animationData={artistAnimation} className="infoAnimation" />
            <div className="infoText">
              <h4>BECOME A CREATOR</h4>
              <p>
                Showcase your 2D sprite artistry on our platform. Become a
                featured creator, share your work globally, and reap the rewards
                of joining our thriving community of artists.
              </p>
            </div>
          </div>
          <MainButton text="MORE INFO" className="infoButton" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
