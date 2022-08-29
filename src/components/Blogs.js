import React from "react";
import Blog from "./Blog";

const blogs = [
  {
    id: 1,
    title: "Boost your conversion rate",
    category: "Article",
    img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author: "Learn With Sumit",
    author_img: "https://avatars.githubusercontent.com/u/73503432?v=4",
    publication_date: "11 Jul, 2022",
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    category: "Article",
    img: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author: "Learn With Sumit",
    author_img: "https://avatars.githubusercontent.com/u/73503432?v=4",
    publication_date: "08 Feb, 2022",
  },
  {
    id: 3,
    title: "Improve your customer experience",
    category: "Article",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author: "Learn With Sumit",
    author_img: "https://avatars.githubusercontent.com/u/73503432?v=4",
    publication_date: "08 Feb, 2022",
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    category: "Article",
    img: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    author: "Learn With Sumit",
    author_img: "https://avatars.githubusercontent.com/u/73503432?v=4",
    publication_date: "08 Feb, 2022",
  },
];

const Blogs = () => {
  return (
    <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
