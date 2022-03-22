import { doc, getDoc, getFirestore } from "firebase/firestore";
<<<<<<< HEAD
import "./FirebaseConfig";

const queryDatabaseForClass = async (className) => {
  const db = getFirestore();
  const docRef = doc(db, "cs-classes", className);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log(docSnap.id);
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return false;
  }
};

export { queryDatabaseForClass };
=======
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
>>>>>>> 5295bf36cf3422b3f189089c5d3f14d9b639735d
