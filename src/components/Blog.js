import { useDispatch } from "react-redux";
import { filteredByAuthor, filteredByCategory } from "../redux/filter/actions";

const Blog = ({ blog }) => {
  const dispatch = useDispatch();

  const { title, img, category, author, author_img, publication_date } = blog;

  const handleCategorySearch = (searchCategory) => {
    dispatch(filteredByCategory(searchCategory));
  };

  const handleAuthorSearch = (searchAuthor) => {
    dispatch(filteredByAuthor(searchAuthor));
  };

  return (
    <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
      <div className='flex-shrink-0'>
        <img className='h-48 w-full object-cover' src={img} alt='' />
      </div>

      <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
        <div className='flex-1'>
          <p className='text-sm font-medium text-indigo-600'>
            <span
              className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer'
              onClick={() => handleCategorySearch(category)}>
              {category}
            </span>
          </p>
          <div className='block mt-1'>
            <p className='text-xl font-semibold text-gray-900'>{title}</p>
          </div>
        </div>
        <div className='mt-6 flex items-center'>
          <div className='flex-shrink-0'>
            <img
              className='h-10 w-10 rounded-full cursor-pointer'
              src={author_img}
              alt=''
              onClick={() => handleAuthorSearch(author)}
            />
          </div>
          <div className='ml-3'>
            <p
              className='text-sm font-medium text-gray-900 hover:underline cursor-pointer'
              onClick={() => handleAuthorSearch(author)}>
              {author}
            </p>
            <div className='flex space-x-1 text-sm text-gray-500'>
              <time dateTime='2020-03-16'>{publication_date}</time>
              <span aria-hidden='true'>&middot;</span>
              <span> 6 min read </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
