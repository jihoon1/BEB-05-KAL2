import "./styles/sideMenu.css";

const categories = [
  "ALL",
  "illustration",
  "Art",
  "Domain Names",
  "Trading Cards",
  "Collectibles",
];

function SideMenu({
  filtering,
  setCategory,
  setMinPrice,
  setMaxPrice,
  setStatus,
}) {
  const setCate = (e) => {
    return setCategory(e.target.value);
  };

  const setMin = (e) => {
    return setMinPrice(e.target.value);
  };

  const setMax = (e) => {
    return setMinPrice(e.target.value);
  };
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
        <div className="currency">ETH</div>
        <div className="priceRange">
          <input
            type="text"
            placeholder="min"
            className="input--price"
            onChange={(el) => {
              return setMin(el);
            }}
          ></input>
          <input
            type="text"
            placeholder="max"
            className="input--price"
            onChange={(el) => {
              return setMax(el);
            }}
          ></input>
        </div>
        <div className="applyButton">Apply</div>
      </div>
      <div className="category">
        <div className="sideMenu--title">category</div>
        <div className="category--list">
          {categories.map((e, idx) => {
            return (
              <div className="category--item" key={idx}>
                <input
                  type="radio"
                  id="select"
                  name="category"
                  className="category--check"
                  value={e}
                  onClick={(el) => {
                    return setCate(el);
                  }}
                />
                <label>{e}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
