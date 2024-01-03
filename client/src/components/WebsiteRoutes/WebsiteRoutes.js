import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./PublicRoutes";
import Navbar from "../Navbar/Navbar";

const WebsiteRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {publicRoutes.map(({ path, element, key }) => (
            <Route path={path} element={element} key={key} exact />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default WebsiteRoutes;
