import React from "react";
import Learn from "./learn";
const Layout = ({ children }) => {
  return (
    <>
      <Learn />
      {children}
    </>
  );
};

export default Layout;
