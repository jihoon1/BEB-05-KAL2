import "./styles/tradeNFT.css";
import SideMenu from "../components/SideMenu";
import FilterBar from "../components/FilterBar";
import ThumbnailNFT from "../components/ThumbnailNFT";

const dummyData = [
  {
    id: 1,
    img: null,
    category: "Art",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: `0.5ETH`,
  },
  {
    id: 2,
    img: null,
    category: "illustration",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: `0.5ETH`,
  },
  {
    id: 3,
    img: null,
    category: "Art",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: `0.5ETH`,
  },
  {
    id: 4,
    img: null,
    category: "Domain Names",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: `0.5ETH`,
  },
  {
    id: 5,
    img: null,
    category: "Trading Cards",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: `0.5ETH`,
  },
  {
    id: 6,
    img: null,
    category: "collectible",
    profileImg: null,
    userName: "HongGilDong",
    createdAt: Date.now(),
    title: "test",
    price: `0.5ETH`,
  },
];
function TradeNFT() {
  return (
    <div>
      <div className="tempNav"></div>
      <div className="wrapper">
        <SideMenu />
        <div className="article">
          <FilterBar />
          <div className="contents">
            {dummyData.map((e, idx) => {
              return <ThumbnailNFT data={e} key={idx} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeNFT;
