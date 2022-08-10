import "./styles/sideMenu.css";

const categories = [
  "illustration",
  "Art",
  "Domain Names",
  "Trading Cards",
  "Collectibles",
];
function SideMenu() {
  return (
    <div className="sideMenu">
      <div className="filter">
        <div className="sideMenu--title">Filter</div>
      </div>
      <div className="status">
        <div className="sideMenu--title">Status</div>
        <div className="wrapper">
          <div className="status--button">New</div>
          <div className="status--button">On Auction</div>
        </div>
      </div>
      <div className="price">
        <div className="sideMenu--title">Price</div>
        <div className="currency">$USD</div>
        <div className="priceRange">
          <input type="text" placeholder="min" className="input--price"></input>
          <input type="text" placeholder="max" className="input--price"></input>
        </div>
        <div className="applyButton">Apply</div>
      </div>
      <div className="category">
        <div className="sideMenu--title">category</div>
        <div className="category--list">
          {categories.map((e) => {
            return (
              <div className="category--item">
                <input
                  type="radio"
                  id="select"
                  name="category"
                  className="category--check"
                />
                <label for="category">{e}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
