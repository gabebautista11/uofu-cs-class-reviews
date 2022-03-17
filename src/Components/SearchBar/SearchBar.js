import { useEffect, useState } from "react";
let classList = require("../../ClassData/classes.json");

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {}, []);

  let autoComplete = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  return (
    <label>
      Class:
      <input
        className="class-search"
        type="search"
        value={searchValue}
        onChange={autoComplete}
        name="class-search"
      />
    </label>
  );
};

export default SearchBar;
