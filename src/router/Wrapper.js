import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
const Wrapper = ({ children }) => {
  return <Router>{children}</Router>;
};

export default Wrapper;
