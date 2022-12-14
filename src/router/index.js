import { Route, Routes } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Wrapper from "./Wrapper";

const Router = ({ children }) => {
  return (
    <Wrapper>
      {children[0]}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"*"} element={<PageNotFound />} />
      </Routes>
      {children[1]}
    </Wrapper>
  );
};

export default Router;
