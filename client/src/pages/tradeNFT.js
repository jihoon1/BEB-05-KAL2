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
  },[]);

  useEffect(() => {
    filtering();
  },[category]);
  const originalNftList = []; //dummyData.map((e) => e);

  const [nftList, setNftList] = useState([]);

  const filtering = () => {
    console.log("filtering",category);
    if (category === "ALL") {
      setNftList(originalNftList);
    } else {
      const tempArr = originalNftList.filter((e) => {
        console.log(e.category, category);
        return SideMenu.categories[e.category] === category;
      });
      setNftList(tempArr);
    }
    console.log('callfilter',nftList);
  };


  const getNFTSellList = async () => {
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
        setNftList((originalNftList) => [...originalNftList, data]);
    });
    console.log("list",originalNftList);
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
              return <ThumbnailNFT data={e} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeNFT;
