/*
|-----------------------------------------
| setting up Blogs for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, October, 2023
|-----------------------------------------
*/
import BlogLink from "./blog-link";

const Blogs = () => {
  return (
    <main className="bg-slate-800 text-white flex w-full h-screen items-center justify-center">
      <div className="w-full grid grid-cols-[400px_1fr]">
        <BlogLink />
        <div className="border w-full h-full flex items-center justify-center">
          Please Click to see dynamic blogs
        </div>
      </div>
    </main>
  );
};
export default Blogs;
