import React from "react";
import { useState, useEffect } from "react";
import Web3 from "web3";
import "./styles/login.css";

function Login() {
  const [web3, setWeb3] = useState("");
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
  };

  return (
    <div className="container">
      <div className="login--wrapper">
        <div className="login--box">
          <div className="login--title">KAL2 Login</div>
          <div className="login--logo">🛩</div>
          <div className="login--button--wrapper">
            <button
              className="login--button"
              onClick={() => {
                connectWallet();
              }}
            >
              <div className="login--button--metamask" />
              <span className="login--button--title">Connet MetaMask</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
