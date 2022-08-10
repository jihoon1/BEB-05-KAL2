import "./styles/filterBar.css";

let count = 0;

function FilterBar() {
  return (
    <div className="filterBar">
      <div className="filterBar--count">{count} results</div>
      <div className="filterBar--sortBy">Sort By</div>
    </div>
  );
}

export default FilterBar;
