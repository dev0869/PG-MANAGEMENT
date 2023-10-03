import React from "react";
import { Header, Footer } from "../components";
import { useLocation } from "react-router-dom";
const Layout = (props) => {
  const atAdmin=useLocation().pathname.includes('admin')
  return (
    <>
      {!atAdmin && <Header />}

      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
