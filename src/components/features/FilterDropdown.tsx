import "./FilterDropdown.css";
import down_chevron_icon from "../../assets/down.png";
import { useState, type ReactNode } from "react";
const FilterDropdown = ({ children }: { children: ReactNode }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="filter-methods">
      <button className="filter-by-region" onClick={() => setShowDropdown((show) => !show)}>
        Filter By Region <img src={down_chevron_icon} alt="down chevron image" />
      </button>
      {showDropdown ? <div className="dropdown">{children}</div> : null}
    </div>
  );
};

export default FilterDropdown;
