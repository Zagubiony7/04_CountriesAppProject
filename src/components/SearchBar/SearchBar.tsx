import "./SearchBar.css";
import FilterDropdown from "../features/FilterDropdown";
import { type SearchBarProps } from "../../../data";
import { useState } from "react";

const SearchBar = ({ countryName, setCountryName, filterCountriesDisplay }: SearchBarProps) => {
  const [filter, setFilter] = useState({ region: "", filter: false });
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  // FUNCTION THAT TELL US WHAT KIND OF REGION WE NEED TO FILTER
  const handleSetFilterMethod = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const region = e.currentTarget.id;
    const isFiltered = !filter.filter;
    const newFilter = {
      region,
      filter: isFiltered,
    };
    setFilter(newFilter);
    filterCountriesDisplay(newFilter);
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
      <FilterDropdown>{regions.map((region) => (<p key={region} onClick={handleSetFilterMethod} id={region} style={filter.filter && filter.region === region ? {backgroundColor: "#f2f0f0"} : {}}>{region}</p>))}</FilterDropdown>
    </div>
  );
};

export default SearchBar;
