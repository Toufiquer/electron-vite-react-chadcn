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
import Chadcn from "./page/chadcn";
import Blogs from "./page/blogs";
import BlogDetails from "./page/blog-details";
import Notfound from "./page/notfound";

const RootRoute = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chadcn" element={<Chadcn />} />
        <Route path="/section" element={<Section />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};
export default RootRoute;
