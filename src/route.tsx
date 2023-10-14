/*
|-----------------------------------------
| setting up Route for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, October, 2023
|-----------------------------------------
*/
import { Route, Routes } from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Section from "./page/section";
import Nav from "./components/nav/Nav";

const RootRoute = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/section" element={<Section />} />
      </Routes>
    </>
  );
};
export default RootRoute;
