import "./App.css";
import TradeNFT from "./pages/tradeNFT";
import InfoNFT from "./pages/infoNFT";
import RegistNFT from "./pages/registNFT";
import db from "./firebase";
import { doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import Home from "./pages/home";
import Login from "./pages/login";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNFT from "./pages/myNFT";
import Footer from "./components/Footer";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

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

  //DBTest();  /  /호출 테스트

  // ---------------------------------------------------- //
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(99999999999999);
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("all");
  const [address, setAddress] = useState("");

  useEffect(() => {}, []);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home address={address} />} />
          <Route
            path="/explore"
            element={
              <TradeNFT
                setCategory={setCategory}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                setStatus={setStatus}
                category={category}
                minPrice={minPrice}
                maxPrice={maxPrice}
                status={status}
              />
            }
          />
          <Route path="/myNFT" element={<MyNFT address={address} />} />
          <Route
            path="/login"
            element={<Login address={address} setAddress={setAddress} />}
          />
          <Route path="/regist" element={<RegistNFT />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
