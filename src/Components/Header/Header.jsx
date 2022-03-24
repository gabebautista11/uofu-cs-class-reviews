import "./Header.css";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { loginWithGoogle, logout } from "../../FirebaseData/GoogleAuth";
import { getAuth } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(getAuth().currentUser);
  const signInClicked = () => {
    console.log("sign in clciked");
    loginWithGoogle().then(() => {
      setCurrentUser(getAuth().currentUser);
    });
  };

  const logoutClicked = () => {
    console.log("sign out clicked");
    logout().then(() => {
      setCurrentUser(getAuth().currentUser);
    });
  };
  return (
    <div className="header">
      <Link to={"/"} className="home-page-link">
        <h1 className="logo">csReviews</h1>
      </Link>
      <SearchBar />
      {currentUser == null ? (
        <button className="sign-in-button" onClick={() => signInClicked()}>
          Sign In
        </button>
      ) : (
        <button className="sign-in-button" onClick={() => logoutClicked()}>
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
