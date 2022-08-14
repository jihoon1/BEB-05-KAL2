import "./styles/filterBar.css";

function FilterBar({ listCount }) {
  return (
    <div className="filterBar">
      <div className="filterBar--count">{listCount} results</div>
      <div className="filterBar--sortBy">Sort By</div>
    </div>
  );
}

export default FilterBar;
