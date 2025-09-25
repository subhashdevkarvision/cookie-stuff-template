import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactUsComponent from "../components/contactUsComponent/ContactUsComponent";
import CartModal from "../components/navbar/CartModal";

const ContactUsPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Navbar handleOpen={handleOpen} />
      <CartModal open={open} handleClose={handleClose} />
      <div style={{ marginTop: "10rem", height: "75vh" }}>
        <ContactUsComponent />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
