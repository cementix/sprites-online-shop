import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./PublicRoutes";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Context } from "../../index";
import { authRoutes } from "./AuthRoutes";
import { AUTH_ROUTE } from "../../utils/consts";

const WebsiteRoutes = () => {
  const { user } = useContext(Context);

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
          {authRoutes.map(({ path, element, key }) => (
            <Route
              path={path}
              element={
                user.isAuth ? element : <Navigate to={AUTH_ROUTE} replace />
              }
              key={key}
              exact
            />
          ))}
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
