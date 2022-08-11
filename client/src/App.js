import "./App.css";
import TradeNFT from "./pages/tradeNFT";
import InfoNFT from "./pages/infoNFT";
import RegistNFT from "./pages/registNFT";
import db from "./firebase";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
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

  //DBTest();  //호출 테스트

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
