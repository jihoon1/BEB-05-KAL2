import db from "../firebase";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";

function Test() {
  const DBTest = async () => {
    console.log("call DBTest");

    //DB에 데이터 추가, 조회, 삭제
    //ADD DATA TO FIRESTORE
    await setDoc(doc(db, "user", "data"), {
      name: "customerName",
      password: "customerPassword",
    });

    //GET DATA FROM FIRESTORE
    const docRef = doc(db, "user", "data");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    }

    //DElETE DATA FROM FIRESTORE
    await deleteDoc(doc(db, "user", "data"));
  };

  const set = async () => {
    await setDoc(doc(db, "user", "data"), {
      id: 1,
      title: "My NFT",
      contract_address: "foi09f8bufn0fqni0qfni0",
      owner: "0xjkqbwkgjqbegmnqwe108y1ufnougn0f13",
      uri: "ipfs://images.com",
      updatedAt: "2022-02-02",
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
