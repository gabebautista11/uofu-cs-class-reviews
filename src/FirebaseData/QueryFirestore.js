import { doc, getDoc, getFirestore } from "firebase/firestore";
import "./FirebaseConfig";

const queryDatabaseForClass = async (className) => {
  const db = getFirestore();
  const docRef = doc(db, "cs-classes", className);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return false;
  }
};

export { queryDatabaseForClass };
