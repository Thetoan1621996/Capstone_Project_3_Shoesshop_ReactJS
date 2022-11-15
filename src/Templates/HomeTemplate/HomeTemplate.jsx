import React from "react";
import HeaderNavbar from "../../Components/HeaderNavbar/HeaderNavbar";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

export default function HomeTemplate() {
  return (
    <div>
      <HeaderNavbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
