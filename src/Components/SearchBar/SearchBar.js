import { useEffect, useState } from "react";
import "./SearchBar.css";
let classList = require("../../ClassData/classes.json");

const SearchBar = () => {
  const classListParsed = classList.map((csClass) => (
    <option key={csClass.class}>{csClass.class}</option>
  ));
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    console.log(classList);
  }, []);

  let updateValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-bar">
      <label className="search-bar-label">
        Class:
        <input
          className="class-search-input"
          type="text"
          value={searchValue}
          onChange={updateValue}
          name="class-search"
          list="class-list"
          placeholder="Class"
        />
        <datalist id="class-list">{classListParsed}</datalist>
      </label>
    </div>
  );
};

export default SearchBar;
