import db from "../firebase";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

function Test() {
  const DBTest = async () => {
    //DElETE DATA FROM FIRESTORE
    await deleteDoc(doc(db, "user", "data"));
  };
  const account = "0x11512de68B5Be4F1B6Cf43f7Aa0455C2408b280b";

  const set = async () => {
    await setDoc(doc(db, "user", account), {
      id: 1,
      name: "kim",
      profileImg: null,
      nfts: [
        {
          tokenId: 1,
        },
        {
          tokenId: 2,
        },
      ],
    });

    const docRef = doc(db, "user", "data");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    }
  };

  set();
  return <div className="test"></div>;
}

export default Test;
