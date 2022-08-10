import "./styles/registNFT.css";
import SideMenu from "../components/SideMenu";

function RegistNFT() {
  return (
    <div>
      <div className="tempNav"></div>
      <div className="wrapper">
        <SideMenu />
        <div className="article">          
          <h1>Regist NFT</h1>
          <div className="contents">
                <div className="rleft">            
                    <div className="contents1"><p/>Upload File<div className="lbox1"><input type="file" id="select" className="input1"/></div></div>
                    <div className="contents1"><p/>Name<div className="lbox2"><input type="text" id="select" className="input1"/></div></div>
                    <div className="contents1"><p/>Extenal Link<div className="lbox3"><input type="text" id="select" className="input1"/></div></div>
                    <div className="contents1"><p/>description<div className="lbox4"><input type="text" id="select" className="input1"/></div></div>
                    <div className="contents1"><p/>Sell Price (only eth)<div className="lbox5"><input type="text" id="select" className="input1"/></div></div>
                    <div className="contents1"><p/>Collection (미지원)<div className="lbox6"><input type="text" id="select" className="input1"/></div></div>
                    <div className="contents1"><p/><div class="button"><p class="btnText">Create</p><div class="btnTwo"><p class="btnText2">now</p></div></div></div>
                </div>
                <div className="rright">
                    <div className="contents2">
                        <p/><div className="pimg">Preview img<p/><div className="lbox2-1">img</div><p/><div class="button"><p class="btnText">buy</p></div></div>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default RegistNFT;
