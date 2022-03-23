import "./Header.css";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">csReviews</h1>
      <SearchBar />
      {/* <button className="sign-in-button">Sign In</button> */}
    </div>
  );
};

export default Header;
