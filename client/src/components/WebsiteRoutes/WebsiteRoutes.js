import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./PublicRoutes";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const WebsiteRoutes = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNavVisible(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsNavScrolled(scrollPosition > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar isVisible={isNavVisible} isScrolled={isNavScrolled} />
        <Routes className="page">
          {publicRoutes.map(({ path, element, key }) => (
            <Route path={path} element={element} key={key} exact />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default WebsiteRoutes;
