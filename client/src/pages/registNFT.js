import { useState } from 'react';
import "./styles/registNFT.css";
import SideMenu from "../components/SideMenu";
import { flushSync } from 'react-dom';
import {pinataUpload, pinataUploadJSON} from "../ipfs";


function RegistNFT() {

  const [dataObj, setInput] = useState({
    NFTFile: "",
    NFTName: "",
    ExLink: "",
    NFTDesc: "",
    SellPrice: "",  
  });
  
  const onChange = (e) => {
    setInput({
      ...dataObj,
      [e.target.name]: e.target.value,
    });
  };
  
  const createMetaData = async ()=> {

    const upLoadIPFSUrl = await pinataUpload(dataObj.nftFile);
    dataObj.ExLink = upLoadIPFSUrl;
    const metaDataJson = {
        name : dataObj.NFTName,
        description : dataObj.NFTDesc,
        price : dataObj.SellPrice,
        NFTUrl : upLoadIPFSUrl,        
    }
    
    const upLoadIPFSMetaDataUrl = await pinataUploadJSON(metaDataJson);
    console.log(upLoadIPFSMetaDataUrl);  // 이 메타데이터 주소값이 DB 유저 데이터로 들어가야함.
  }

  const onLoadFile = (e) => {    
    setInput({
      ...dataObj,
      [e.target.name]: e.target.files[0]
    });
  }

  const onSubmit = async (e) => {
    console.log("onSubmit");
    if(dataObj.NFTFile && dataObj.NFTName && dataObj.NFTDesc && dataObj.SellPrice){
      createMetaData();
    }
    else{
      if(dataObj.NFTFile)
        console.log("Please fill all the fields");
      else
        console.log("Please upload a file");
    }
  }

  return (
    <div>
      <div className="tempNav"></div>
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
                  <input type="file" name="NFTFile" className="input1" onChange={onLoadFile}/>
                </div>
              </div>
              <div className="contents1">
                <p />
                Name
                <div className="lbox2">
                  <input type="text" name="NFTName" className="input1" onChange={onChange}/>
                </div>
              </div>
              <div className="contents1">
                <p />
                Extenal Link
                <div className="lbox3">
                  <input type="text" readOnly value='defult' name="ExLink" className="input1"/>
                </div>
              </div>
              <div className="contents1">
                <p />
                description
                <div className="lbox4">
                  <input type="text" name="NFTDesc" className="input1" onChange={onChange}/>
                </div>
              </div>
              <div className="contents1">
                <p />
                Sell Price (only eth)
                <div className="lbox5">
                  <input type="text" name="SellPrice" className="input1" onChange={onChange}/>
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
            <div className="rright">
              <div className="contents2">
                <p />
                <div className="pimg">
                  Preview img
                  <p />
                  <div className="lbox2-1">img</div>
                  <p />
                  <div className="button">
                    <p className="btnText">buy</p>
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
