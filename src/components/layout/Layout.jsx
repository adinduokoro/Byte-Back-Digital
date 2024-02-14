import React from "react";
import "./Layout.module.css";
import { Navigation, Footer } from "../index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
