import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactUsComponent from "../components/contactUsComponent/ContactUsComponent";

const ContactUsPage = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "10rem", height: "75vh" }}>
        <ContactUsComponent />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
