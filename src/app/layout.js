import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./globals.css";
import StoreProvider from "./storeProvider";

import React from "react";

function Layout({ children }) {
  return (
    <html>
      <body>
        <StoreProvider>
          <Navbar />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}

export default Layout;