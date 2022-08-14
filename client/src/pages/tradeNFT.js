import "./styles/tradeNFT.css";
import SideMenu from "../components/SideMenu";
import FilterBar from "../components/FilterBar";
import ThumbnailNFT from "../components/ThumbnailNFT";
import { useEffect, useState } from "react";

const dummyData = [
  {
    id: 1,
    img: null,
    category: "Art",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: `0.5`,
  },
  {
    id: 2,
    img: null,
    category: "illustration",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: `0.5`,
  },
  {
    id: 3,
    img: null,
    category: "Art",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: `0.5`,
  },
  {
    id: 4,
    img: null,
    category: "Domain Names",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: `0.5`,
  },
  {
    id: 5,
    img: null,
    category: "Trading Cards",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: `0.5`,
  },
  {
    id: 6,
    img: null,
    category: "collectible",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: `0.5`,
  },
  {
    id: 7,
    img: null,
    category: "collectible",
    profileImg: null,
    username: "Kim",
    title: "test",
    price: `0.5`,
  },
];
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
    filtering();
  });
  const originalNftList = dummyData.map((e) => e);

  const [nftList, setNftList] = useState(dummyData);

  const filtering = () => {
    if (category == "ALL") {
      setNftList(originalNftList);
    } else {
      const tempArr = originalNftList.filter((e) => {
        return e.category == category;
      });
      setNftList(tempArr);
    }
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
