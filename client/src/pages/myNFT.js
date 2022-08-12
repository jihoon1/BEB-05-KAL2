
import SideMenu from "../components/SideMenu";
import FilterBar from "../components/FilterBar";
import ThumbnailNFT from "../components/ThumbnailNFT";
import db from "../firebase";
import { getDocs, collection} from "firebase/firestore";
import { useEffect } from "react";

function MyNFT({ address }) {
  const myNftData = [];
  console.log('addr',address);

  useEffect(() => {
    getMyNFT();
  }, []);
  
  const getMyNFT = async (address) => {
    if(address === undefined)
      return;

    //GET DATA FROM FIRESTORE
    const docRef = collection(db, "user",address,"NFT");
    const docSnap = await getDocs(docRef);
    docSnap.forEach((doc) => {    
      //console.log(doc.id, " => ", doc.data());
      const data ={
        id: myNftData.length,
        img: doc.data().NFTUrl,
        category: doc.data().category,
        desc: doc.data().description,
        userName: doc.data().name,
        createdAt: Date.now(),
        title: doc.data().name,
        price: doc.data().price,
      };
      myNftData.push(data);
    });
    console.log('myNftData',myNftData);
  }

  return (<div>
    <div className="wrapper">
      <SideMenu/>
      <div className="article">
        <FilterBar />
        <div className="contents">
          {myNftData.map((e, idx) => {
            return <ThumbnailNFT data={e} key={idx} />;
          })}
        </div>
      </div>
    </div>
  </div>);
}

export default MyNFT;
