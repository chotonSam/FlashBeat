import { useContext } from "react";
import { SearchContext } from "../../context/newsContext";
import useDebounce from "../../hooks/useDebounce"; // Import the useDebounce hook

import { FaSearch, FaSearchMinus } from "react-icons/fa";

export default function Search() {
  const {
    searchTerm,
    setSearchTerm,
    inputModal,
    setInputModal,
    inputValue,
    setInputValue,
  } = useContext(SearchContext);

  // Define the debounced function to update the search term
  const debouncedSetSearchTerm = useDebounce((value) => {
    setSearchTerm(value);
  }, 500); // Adjust the delay as needed (500ms here)

  function handleSearch(e) {
    const value = e.target.value;
    setInputValue(value);
    debouncedSetSearchTerm(value); // Use the debounced function to update the search term
  }

  function buttonHandle() {
    setInputModal(!inputModal);
    setInputValue("");
  }
  return (
    <form className="flex items-center gap-1 lg:w-72 w-full justify-end">
      {inputModal ? (
        <input
          onChange={handleSearch} // Call handleSearch on input change
          value={inputValue} // Bind the input value to inputValue state
          type="text"
          placeholder="Search news..."
          className="border rounded-lg py-1.5 px-4 w-full outline-none focus:ring-2 focus:ring-gray-400"
        />
      ) : null}

      <button
        onClick={buttonHandle}
        type="button"
        className="flex items-center justify-center p-[9px] rounded-md hover:bg-gray-100 focus:outline-none active:outline-none"
      >
        {inputModal ? (
          <FaSearchMinus className="text-gray-600 text-xl" />
        ) : (
          <FaSearch className="text-gray-600 text-xl " />
        )}
      </button>
    </form>
  );
}
