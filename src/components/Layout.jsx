import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import CartModal from "./navbar/CartModal";
import { Outlet } from "react-router";
import Footer from "./footer/Footer";

const Layout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Navbar handleOpen={handleOpen} />
      <CartModal open={open} handleClose={handleClose} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
