import "./FirebaseConfig.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

const loginWithGoogle = async () => {
  await signInWithPopup(auth, provider);
};

const logout = async () => {
  await signOut(auth);
};

export { loginWithGoogle, logout };
