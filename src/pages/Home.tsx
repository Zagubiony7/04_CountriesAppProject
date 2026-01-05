import "./Home.css";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Countries from "../components/Countries/Countries";
import { useState } from "react";
import COUNTRIES from "../../data.json";

const Home = () => {
  const [countryName, setCountryName] = useState("");
  const [countriesToRender, setCountriesToRender] = useState(COUNTRIES.slice(0, 8));

  // FILTER COUNTRIES DISPLAY FUNCTION
  const filterCountriesDisplay = (filterMethod: { region: string; filter: boolean }) => {
    if (!filterMethod.filter) {
      setCountriesToRender(COUNTRIES.slice(0, 8));
    } else {
      setCountriesToRender((prevCountries) => prevCountries.filter(({ region }) => region === filterMethod.region));
    }
  };
  return (
    <div>
      <Header />
      <SearchBar countryName={countryName} setCountryName={setCountryName} filterCountriesDisplay={filterCountriesDisplay} />
      <Countries countriesToRender={countriesToRender} />
    </div>
  );
};

export default Home;
