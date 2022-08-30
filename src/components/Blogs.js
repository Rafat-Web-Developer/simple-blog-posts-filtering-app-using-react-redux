import { useSelector } from "react-redux";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = useSelector((state) => state.blog);
  const filter = useSelector((state) => state.filter);

  return (
    <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
      {blogs
        .filter((blog) => {
          const { category } = filter;
          if (category === "") {
            return true;
          } else if (category === blog.category) {
            return true;
          } else {
            return false;
          }
        })
        .filter((blog) => {
          const { author } = filter;
          if (author === "") {
            return true;
          } else if (author === blog.author) {
            return true;
          } else {
            return false;
          }
        })
        .map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
    </div>
  );
};

export default Blogs;
