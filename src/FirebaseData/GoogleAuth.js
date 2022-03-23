import {
  signInWithRedirect,
  GoogleAuthProvider,
  signOut,
  getRedirectResult,
} from "firebase/auth";
import { auth } from "./FirebaseConfig";

const GoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
  const result = await getRedirectResult(auth);
  console.log(result.user);
};

const GoogleSignOut = () => {
  signOut(auth);
};
export { GoogleSignIn, GoogleSignOut };
