import "./SearchBar.css";
import FilterDropdown from "../features/FilterDropdown";
import { type SearchBarProps } from "../../../data";
import { useState } from "react";

const SearchBar = ({ countryName, setCountryName, filterCountries }: SearchBarProps) => {
  // state to filter countries render
  const [filter, setFilter] = useState({ region: "", filter: false });
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleSetFilterMethod = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const filterMethod = e.currentTarget.id;
    setFilter((prevFilter) => ({ region: filterMethod, filter: !prevFilter.filter }));
    filterCountries(filter);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a country"
        value={countryName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountryName(e.target.value)}
      />
      {/* prettier-ignore */}
      <FilterDropdown>{regions.map((region) => (<p key={region} onClick={handleSetFilterMethod} id={region}>{region}</p>))}</FilterDropdown>
    </div>
  );
};

export default SearchBar;
