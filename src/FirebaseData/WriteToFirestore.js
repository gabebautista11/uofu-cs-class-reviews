import { getAuth } from "firebase/auth";
import { doc, updateDoc, getFirestore, arrayUnion } from "firebase/firestore";
import "./FirebaseConfig";

const addAReview = async (className, _rating, _professor, _review) => {
  const db = getFirestore();
  await updateDoc(doc(db, "cs-classes", className), {
    reviews: arrayUnion({
      professor: _professor,
      rating: _rating,
      review: _review,
      author: getAuth().currentUser.uid,
    }),
  });
};

export { addAReview };
