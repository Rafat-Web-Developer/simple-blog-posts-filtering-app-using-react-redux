import { useSelector } from "react-redux";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = useSelector((state) => state.blog);
  return (
    <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
