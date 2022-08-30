import { useDispatch } from "react-redux";
import searchIcon from "../assets/search.svg";
import { filteredByTitleText } from "../redux/filter/actions";

const SearchBox = () => {
  const dispatch = useDispatch();

  const debounce = (fn, delay) => {
    let timeOutId;
    return (...args) => {
      if (timeOutId) {
        clearTimeout(timeOutId);
      }
      timeOutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleSearch = (searchText) => {
    dispatch(filteredByTitleText(searchText));
  };

  const getTextAndCallDebounce = debounce(handleSearch, 500);

  return (
    <div className='border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200'>
      <input
        className='outline-none border-none bg-gray-50 h-full w-full mr-2'
        type='search'
        name='search'
        placeholder='Search'
        onChange={(e) => getTextAndCallDebounce(e.target.value)}
      />
      <img
        className='inline h-6 cursor-pointer'
        src={searchIcon}
        alt='Search'
      />
    </div>
  );
};

export default SearchBox;
