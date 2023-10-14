/*
|-----------------------------------------
| setting up BlogDetails for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, October, 2023
|-----------------------------------------
*/
import { useParams } from "react-router-dom";
import BlogLink from "./blog-link";

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <main className="bg-slate-800 text-white flex w-full h-screen items-center justify-center">
      <div className="w-full grid grid-cols-[400px_1fr]">
        <BlogLink />
        <div className="border w-full h-full flex items-center justify-center">
          Blog Id: {id}
        </div>
      </div>
    </main>
  );
};
export default BlogDetails;
