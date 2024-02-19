import React, { useRef } from "react";
import styles from "../navigation/Navigation.module.css";
import { Navigation, Footer } from "../index";
import { Outlet } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
gsap.registerPlugin(ScrollTrigger);

const Layout = () => {
  const container = useRef();
  const navigation = useRef();

  useGSAP(
    () => {
      const navHeight = navigation.current.clientHeight;

      ScrollTrigger.create({
        trigger: "#app-content",
        start: `start ${navHeight}`,
        end: "bottom top",
        toggleClass: { targets: "#nav", className: `${styles.active}` },
      });
    },
    {
      scope: container,
    }
  );

  return (
    <div ref={container}>
      <ToastContainer />
      <div ref={navigation}>
        <Navigation />
      </div>
      <div id="app-content">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
