// import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
