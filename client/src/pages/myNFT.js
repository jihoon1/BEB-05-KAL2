import "./styles/myNFT.css";
import ThumbnailNFT from "../components/ThumbnailNFT";
import db from "../firebase";

import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

function MyNFT({ address }) {
  console.log("addr", address);

  const [myNftData, setMyNft] = useState([]);

  useEffect(() => {
    getMyNFT();
  }, []);

  const getMyNFT = async (address) => {
    let addr = address;
    if (address === undefined)
      addr = "0xbcC230bEC953aF066d730F5325F0f5EE21Cb8911";
    //GET DATA FROM FIRESTORE
    const docRef = collection(db, "user", addr, "NFT");
    const docSnap = await getDocs(docRef);
    docSnap.forEach((doc) => {
      //console.log(doc.id, " => ", doc.data());
      const data = {
        id: myNftData.length,
        image: doc.data().NFTUrl,
        category: doc.data().category,
        desc: doc.data().description,
        userName: doc.data().name,
        createdAt: Date.now(),
        title: doc.data().name,
        price: doc.data().price,
      };
      setMyNft((myNftData) => [...myNftData, data]);
      //myNftData.push(data);
    });
    console.log("myNftData", myNftData);
  };

  return (
    <div>
      <div className="myNFT--wrapper">
        <div className="myNFT--article">
          <div className="myAddress--wrapper">
            {address !== undefined ? (
              <div className="myAddress">MY WALLET : {address}</div>
            ) : (
              <div className="myAddress">로그인을 해주세요</div>
            )}
          </div>
          <div className="myNFT--contents">
            {myNftData.length > 0 ? (
              myNftData.map((e, idx) => {
                return <ThumbnailNFT data={e} key={idx} />;
              })
            ) : (
              <h>보유중인 NFT가 없습니다.</h>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNFT;