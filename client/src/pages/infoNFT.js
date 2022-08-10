import "./styles/infoNFT.css";

function infoNFT() {
  return (
    <div className="container">
      <div className="container--wrapper">
        <div className="presentation">
          <div className="presentation--wrapper">
            <div className="presentation--category"> Art</div>
            <div className="detail--purchase--button">Purchase Now</div>
          </div>
        </div>
        <div className="detail">
          <div className="detail--wrapper">
            <div className="detail--title">The Test NFT</div>
            <div className="detail--description">
              This is Test Description
              <br />
              codestates very very difficult
              <br />
              holy moly
              <br />
              bull shiiiiitt
              <br />
            </div>
            <div className="detail--histories">
              <div className="histories--column">
                <span className="column--name">Creator</span>
                <span className="column--name">Price</span>
              </div>
            </div>
            <div className="detail--owner">
              <div className="owner--title">Owner</div>
              <div className="owner--profile">
                <div className="owner--profileImage"></div>
                <div className="owner--name">testName</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default infoNFT;
