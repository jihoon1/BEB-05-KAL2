import "./styles/tumbnailNFT.css";
import React from "react";
import defaultNFT from "../assets/default-NFT.png";

function ThumbnailNFT({ data, isBuy =false }) {
  console.log('--------',isBuy);
  return (
    <div className="NFT--card">
      <div className="limit">
        <div className="NFT--category">{data.category}</div>
        <img
          className="NFT--thumbnail--image"
          src={data.image || defaultNFT}
          alt="profile"
        ></img>
        <div className="NFT--inform--wrapper">
          <div className="NFT--inform--profile">
            <div className="NFT--inform--profile--image"></div>
            <div className="NFT--inform--profile--name">{data.userName}</div>
          </div>
          <div className="NFT--title">{data.title}</div>
          <div className="NFT--price">{data.price} ETH</div>
          {(isBuy)?<div className="NFT--buy"><button onClick={() => {}}>구매</button></div>:null}
        </div>
      </div>
    </div>
  );
}

ThumbnailNFT.defaultProps = {
  data: {
    category: "No Category",
    title: "No Title",
    price: "0.0 ETH",
    image: defaultNFT,
  },
};
export default ThumbnailNFT;
