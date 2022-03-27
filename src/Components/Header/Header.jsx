import "./Header.css";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { loginWithGoogle, logout } from "../../FirebaseData/GoogleAuth";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/auth";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const signInClicked = () => {
    console.log("sign in clicked");
    loginWithGoogle().then(() => {
      dispatch(setUser(getAuth().currentUser));
    });
  };

  const logoutClicked = () => {
    logout().then(() => {
      dispatch(setUser(getAuth().currentUser));
    });
  };
  return (
    <div className="header">
      <div className="logo-div">
        <Link to={"/"} className="home-page-link">
          <h1 className="logo">csReviews</h1>
        </Link>
      </div>
      <SearchBar className="search-bar" />
      <div className="sign-in-button-div">
        {user == null ? (
          <button className="sign-in-button" onClick={() => signInClicked()}>
            Sign In
          </button>
        ) : (
          <button className="sign-in-button" onClick={() => logoutClicked()}>
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
