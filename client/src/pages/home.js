import "./styles/home.css";
import ThumbnailNFT from "../components/ThumbnailNFT";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import db from "../firebase";
import { getDocs, collection } from "firebase/firestore";

function Home({ address }) {
  useEffect(() => {
    getNFTList();
  }, []);

  const [nftList, setNftList] = useState([]);

  const getNFTList = async () => {
    const docRef = collection(db, "NFT");
    const docSnap = await getDocs(docRef);
    let counter = 0;
    docSnap.forEach((doc) => {
      const data = {
        id: counter++,
        image: doc.data().NFTUrl,
        category: doc.data().category,
        desc: doc.data().description,
        userName: doc.data().name,
        createdAt: Date.now(),
        title: doc.data().name,
        price: doc.data().price,
      };

      if (counter > 2) return; //2개만 처리함

      setNftList((nftList) => [...nftList, data]);
    });
    console.log("list", nftList);
  };

  return (
    <>
      <div className="home--container--wrapper">
        <div className="container--main">
          <div className="container--main--wrapper--left">
            <div className="container--main--slogan">Explore,</div>
            <div className="container--main--slogan">Create,</div>
            <div className="container--main--slogan">and Sell NFTs</div>
            <div className="container--main--subSlogan">
              KAL2 is best NFT MarketPlace
            </div>
            <div className="container--main--buttons">
              <Link className="container--main--explore--button" to="/explore">
                Explore
              </Link>
              <Link className="container--main--create--button" to="/regist">
                Create
              </Link>
            </div>
          </div>
          <div className="container--main--wrapper--right">
            {nftList.map((e, idx) => {
              return <ThumbnailNFT data={e} key={idx} />;
            })}
          </div>
        </div>
      </div>
      <div className="home--container--wrapper">
        <div className="container--liveAuction">
          <div className="container--liveAuction--title">Live Auctions</div>
          <div className="container--liveAuction--cards">
            {nftList.map((e, idx) => {
              return <ThumbnailNFT data={e} key={idx} />;
            })}
            {nftList.map((e, idx) => {
              return <ThumbnailNFT data={e} key={idx} />;
            })}
          </div>
          <Link
            to="/explore"
            className="container--liveAuction--viewMore--button"
          >
            View More
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
