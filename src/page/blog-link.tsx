import { Link } from "react-router-dom";

/*
|-----------------------------------------
| setting up BlogLink for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, October, 2023
|-----------------------------------------
*/
const handleClicked = (id: number) => {
  console.log(id);
};

const BlogLink = () => {
  return (
    <div className="flex flex-col">
      <Link
        onClick={() => handleClicked(1)}
        to="/blogs/1"
        className=" cursor-pointer border-b py-3 text-center border-t"
      >
        Blog-1
      </Link>
      <Link
        onClick={() => handleClicked(2)}
        to="/blogs/2"
        className=" cursor-pointer border-b py-3 text-center"
      >
        Blog-2
      </Link>
      <Link
        onClick={() => handleClicked(3)}
        to="/blogs/3"
        className=" cursor-pointer border-b py-3 text-center"
      >
        Blog-3
      </Link>
      <Link
        onClick={() => handleClicked(4)}
        to="/blogs/4"
        className=" cursor-pointer border-b py-3 text-center"
      >
        Blog-4
      </Link>
      <Link
        onClick={() => handleClicked(5)}
        to="/blogs/5"
        className=" cursor-pointer border-b py-3 text-center"
      >
        Blog-5
      </Link>
      <Link
        onClick={() => handleClicked(6)}
        to="/blogs/6"
        className=" cursor-pointer border-b py-3 text-center"
      >
        Blog-6
      </Link>
      <Link
        onClick={() => handleClicked(7)}
        to="/blogs/7"
        className=" cursor-pointer border-b py-3 text-center"
      >
        Blog-7
      </Link>
      <Link
        onClick={() => handleClicked(8)}
        to="/blogs/8"
        className=" cursor-pointer border-b py-3 text-center"
      >
        Blog-8
      </Link>
    </div>
  );
};
export default BlogLink;
