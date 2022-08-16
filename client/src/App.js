import "./App.css";
import TradeNFT from "./pages/tradeNFT";
import Test from "./pages/test";
import RegistNFT from "./pages/registNFT";
import Home from "./pages/home";
import Login from "./pages/login";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNFT from "./pages/myNFT";
import Footer from "./components/Footer";

function App() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(99999999999999);
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("ALL");
  const [address, setAddress] = useState("");

  useEffect(() => {});

  return (
    <div>
      <div className="container">
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
            <Route path="/regist" element={<RegistNFT address={address} />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
