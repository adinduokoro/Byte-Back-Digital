import React from "react";
import "./Layout.module.css";
import { Header, Footer } from "../index";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
