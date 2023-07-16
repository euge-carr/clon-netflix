import React from "react";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";

const GeneralLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "0 1rem",
      }}
    >
      <Nav />
      <div style={{ flex: 1, marginTop: "1rem", marginBottom: "1rem" }}>{children}</div> 
      <Footer />
    </div>
  );
};

export default GeneralLayout;
