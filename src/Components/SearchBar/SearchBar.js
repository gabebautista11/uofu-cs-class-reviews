import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
let classList = require("../../ClassData/classes.json");

const SearchBar = () => {
  let navigation = useNavigate();
  const classListParsed = classList.map((csClass) => (
    <option key={csClass.class}>{csClass.class}</option>
  ));
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    console.log(classList);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    navigation(`/ViewReviews/${searchValue}`);
    setSearchValue("");
  };

  return (
    <div className="search-bar">
      <form className="search-bar-form" onSubmit={handleSubmit}>
        <label className="inv-labels">Class:</label>
        <input
          className="class-search-input"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          name="class-search"
          list="class-list"
          placeholder="Class"
        />
        <datalist id="class-list">{classListParsed}</datalist>

        <label className="inv-labels">Search:</label>
        <input type="submit" />
      </form>
    </div>
  );
};

export default SearchBar;
