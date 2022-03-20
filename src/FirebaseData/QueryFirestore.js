import { doc, getDoc, getFirestore } from "firebase/firestore";
const getReviews = async (className) => {
  const db = getFirestore();
  const docRef = doc(db, "cities", "SF");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export default getReviews;
