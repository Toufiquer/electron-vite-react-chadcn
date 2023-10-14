/*
|-----------------------------------------
| setting up Nav for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, October, 2023
|-----------------------------------------
*/

import { Link } from "react-router-dom";

const linkStyle = "text-blue-500 hover:text-blue-800";

const Nav = () => {
  return (
    <nav className="p-4">
      <div className="flex gap-6">
        <Link to="/" className={linkStyle}>
          Home
        </Link>
        <Link to="/about" className={linkStyle}>
          About
        </Link>
        <Link to="/chadcn" className={linkStyle}>
          ChadCN
        </Link>
        <Link to="/section" className={linkStyle}>
          Section
        </Link>
        <Link to="/blogs" className={linkStyle}>
          Blogs
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
