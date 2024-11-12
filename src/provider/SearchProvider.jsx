import { SearchContext } from "../context/newsContext";

import { useState } from "react";

const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputModal, setInputModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        inputModal,
        setInputModal,
        inputValue,
        setInputValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
