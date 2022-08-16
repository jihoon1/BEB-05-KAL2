import "./styles/tradeNFT.css";
import SideMenu from "../components/SideMenu";
import FilterBar from "../components/FilterBar";
import ThumbnailNFT from "../components/ThumbnailNFT";
import { useEffect, useState } from "react";
import db from "../firebase";
import { getDocs, collection } from "firebase/firestore";

function TradeNFT({
  category,
  minPrice,
  maxPrice,
  status,
  setCategory,
  setMinPrice,
  setMaxPrice,
  setStatus,
}) {
  useEffect(() => {
    getNFTSellList();
    filtering();
  }, []);

  useEffect(() => {
    filtering();
  }, [category]);

  const [originalNftList, setoriginalNftList] = useState([]);
  const [nftList, setNftList] = useState([]);

  const filtering = () => {
    console.log(originalNftList);
    if (category === "ALL") {
      setNftList(originalNftList);
    } else {
      const tempArr = originalNftList.filter((e) => {
        return e.category === category;
      });
      setNftList(tempArr);
    }
  };

  const getNFTSellList = async () => {
    const docRef = collection(db, "NFT");
    const docSnap = await getDocs(docRef);
    let counter = 0;
    let temp = [];
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
      temp.push(data);
    });
    setNftList(temp);
    setoriginalNftList(temp);
  };

  return (
    <div>
      <div className="wrapper">
        <SideMenu
          category={category}
          setCategory={setCategory}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          setStatus={setStatus}
        />
        <div className="article">
          <FilterBar listCount={nftList.length} />
          <div className="contents">
            {nftList.map((e, idx) => {
              return <ThumbnailNFT data={e} key={idx} isBuy={true}/>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeNFT;
