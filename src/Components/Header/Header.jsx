import "./Header.css";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { auth } from "../../FirebaseData/FirebaseConfig";
import { GoogleSignIn, GoogleSignOut } from "../../FirebaseData/GoogleAuth";
const Header = () => {
  console.log(auth.currentUser);
  return (
    <div className="header">
      <h1 className="logo">csReviews</h1>
      <SearchBar />
      {auth.currentUser == null ? (
        <button className="sign-in-button" onClick={() => GoogleSignIn}>
          Sign In
        </button>
      ) : (
        <button className="sign-in-button" onClick={() => GoogleSignOut}>
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
