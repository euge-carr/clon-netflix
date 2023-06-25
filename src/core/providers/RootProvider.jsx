import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../themes/themes";
import { HelmetProvider } from "react-helmet-async";

const RootProvider = ({ children }) => {
    return (
        <HelmetProvider>
            <NextUIProvider theme={darkTheme}>
                {children}
            </NextUIProvider>
        </HelmetProvider> 
    );
};

export default RootProvider;
