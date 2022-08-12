import "./styles/myNFT.css";
function MyNFT({ address }) {
  console.log(address);
  return <div className="test--page">{address}</div>;
}

export default MyNFT;
