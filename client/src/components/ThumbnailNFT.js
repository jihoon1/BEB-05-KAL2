import "./styles/tumbnailNFT.css";
import React from "react";

function ThumbnailNFT({ data }) {
  return (
    <div className="NFT--card">
      <div className="limit">
        <div className="NFT--category">{data.category}</div>
        <div className="NFT--thumbnail--image"></div>
        <div className="NFT--inform--wrapper">
          <div className="NFT--inform--profile">
            <div className="NFT--inform--profile--image"></div>
            <div className="NFT--inform--profile--name">{data.userName}</div>
          </div>
          <div className="NFT--title">{data.title}</div>
          <div className="NFT--price">{data.price}</div>
        </div>
      </div>
    </div>
  );
}

export default ThumbnailNFT;
