import React from "react";
import Nav from "../../../components/Nav/Nav";
import Footer from "../../../components/Footer/Footer";

const GeneralLayout = ({ children }) => {
    return (
        <div
            style={{
                display:"flex",
                flexDirection:"column",
                minWidth: "100vh",
            }}
        >
            <Nav/>
            {children}
            <Footer/>
        </div>
  )
};

export default GeneralLayout;
