import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NewHeader from "../NewHeader/NewHeader";
import "../../styles/custom-style.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {/* <NewHeader /> */}
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
