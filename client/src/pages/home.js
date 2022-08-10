import "./styles/home.css";
import ThumbnailNFT from "../components/ThumbnailNFT";

const card = [
  {
    id: 1,
    category: "Airplane",
    title: "KAL2",
    price: "999 ETH",
  },
  {
    id: 2,
    category: "Art",
    title: "CodeStates",
    price: "999 ETH",
  },
];
function Home() {
  return (
    <div className="container">
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
              <div className="container--main--explore--button">Explore</div>
              <div className="container--main--create--button">Create</div>
            </div>
          </div>
          <div className="container--main--wrapper--right">
            {card.map((e, idx) => {
              return <ThumbnailNFT data={e} key={idx} />;
            })}
          </div>
        </div>
        <div className="container--liveAuction">
          <div className="container--liveAuction--title">Live Auctions</div>
          <div className="container--liveAuction--cards">
            {card.map((e, idx) => {
              return <ThumbnailNFT data={e} key={idx} />;
            })}
            {card.map((e, idx) => {
              return <ThumbnailNFT data={e} key={idx} />;
            })}
          </div>
          <div className="container--liveAuction--viewMore--button">
            View More
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
