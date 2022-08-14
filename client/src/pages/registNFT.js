import { useState } from "react";
import "./styles/registNFT.css";
import SideMenu from "../components/SideMenu";
import { pinataUpload, pinataUploadJSON } from "../ipfs";
import db from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const categories = [
  "ALL",
  "illustration",
  "Art",
  "Domain Names",
  "Trading Cards",
  "Collectibles",
];
const status = ["NEW", "On Auction"];

function RegistNFT() {
  const [dataObj, setInput] = useState({
    NFTFile: "",
    NFTName: "",
    ExLink: "",
    NFTDesc: "",
    SellPrice: "",
    Category: "",
    Status: "",
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...dataObj,
      [e.target.name]: e.target.value,
    });
  };

  const createMetaData = async () => {
    const upLoadIPFSUrl = await pinataUpload(dataObj.nftFile);
    dataObj.ExLink = upLoadIPFSUrl;
    const metaDataJson = {
      name: dataObj.NFTName,
      description: dataObj.NFTDesc,
      price: dataObj.SellPrice,
      NFTUrl: upLoadIPFSUrl,
    };

    const pinata_gwUrl = "https://gateway.pinata.cloud/ipfs/";
    const upLoadIPFSMetaDataHash = await pinataUploadJSON(metaDataJson);
    console.log(pinata_gwUrl + upLoadIPFSMetaDataHash); // JSON 파일 경로

    //ADD DATA TO FIRESTORE
    const docData = {
      name: dataObj.NFTName,
      description: dataObj.NFTDesc,
      price: dataObj.SellPrice,
      NFTUrl: upLoadIPFSUrl,
      MetaDataUrl: pinata_gwUrl + upLoadIPFSMetaDataHash,
      category: dataObj.Category,
      status: 0,
    };

    await setDoc(
      doc(
        db,
        "user",
        "0xbcC230bEC953aF066d730F5325F0f5EE21Cb8911",
        "NFT",
        upLoadIPFSMetaDataHash
      ),
      docData
    );
  };

  const onLoadFile = (e) => {
    setInput({
      ...dataObj,
      [e.target.name]: e.target.files[0],
    });
  };

  const onSubmit = async (e) => {
    console.log("onSubmit");
    if (
      dataObj.NFTFile &&
      dataObj.NFTName &&
      dataObj.NFTDesc &&
      dataObj.SellPrice
    ) {
      createMetaData();
    } else {
      if (dataObj.NFTFile) console.log("Please fill all the fields");
      else console.log("Please upload a file");
    }
  };

  return (
    <div>
      <div className="wrapper">
        <SideMenu />
        <div className="article">
          <h1>Regist NFT</h1>
          <div className="contents">
            <div className="rleft">
              <div className="contents1">
                <p />
                Upload File
                <div className="lbox1">
                  <input
                    type="file"
                    name="NFTFile"
                    className="input1"
                    onChange={onLoadFile}
                  />
                </div>
              </div>
              <div className="contents1">
                <p />
                Name
                <div className="lbox2">
                  <input
                    type="text"
                    name="NFTName"
                    className="input1"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="contents1">
                <p />
                Category
                <div className="">
                  {categories.map((e, idx) => {
                    return (
                      <div className="category--item" key={idx}>
                        <input
                          type="radio"
                          id="select"
                          name="category"
                          className="category--check"
                          onChange={onChange}
                          value={idx}
                        />
                        <label>{e}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="contents1">
                <p />
                description
                <div className="lbox4">
                  <input
                    type="text"
                    name="NFTDesc"
                    className="input1"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="contents1">
                <p />
                Sell Price (only eth)
                <div className="lbox5">
                  <input
                    type="text"
                    name="SellPrice"
                    className="input1"
                    onChange={onChange}
                  />
                </div>
              </div>
              {/* <div className="contents1"><p/>Collection<div className="lbox6"><input type="text" id="select" className="input1"/></div></div> */}
              <div className="contents1">
                <p />
                <div className="button" onClick={onSubmit}>
                  <p className="btnText">Create</p>
                  <div className="btnTwo">
                    <p className="btnText2">now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistNFT;
