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
    price: 0.5,
  },
  {
    id: 2,
    img: null,
    category: "illustration",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: 0.5,
  },
  {
    id: 3,
    img: null,
    category: "Art",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: 0.5,
  },
  {
    id: 4,
    img: null,
    category: "Domain Names",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: 0.5,
  },
  {
    id: 5,
    img: null,
    category: "Trading Cards",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: 0.5,
  },
  {
    id: 6,
    img: null,
    category: "collectible",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: 0.5,
  },
  {
    id: 7,
    img: null,
    category: "collectible",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: 0.5,
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
  useEffect(() => {});

  const [page, setPage] = useState(1);
  const originalNftList = dummyData.map((e) => e).slice(0, 6 * page);

  const paging = () => {
    setPage(page + 1);
    console.log(page);
    console.log(originalNftList);
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
          <FilterBar listCount={originalNftList.length} />
          <div className="contents">
            {originalNftList.map((e, idx) => {
              if (category === "ALL") {
                return <ThumbnailNFT data={e} key={idx} />;
              } else if (
                e.category === category &&
                e.price <= maxPrice &&
                e.price >= minPrice
              ) {
                return <ThumbnailNFT data={e} key={idx} />;
              } else {
                return;
              }
            })}
          </div>
          <div className="viewMore--wrapper">
            <button
              className="viewMore"
              onClick={() => {
                return paging();
              }}
            >
              view more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeNFT;
