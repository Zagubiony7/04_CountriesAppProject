import "./Home.css";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Countries from "../components/Countries/Countries";
import { useState } from "react";
import COUNTRIES from "../../data.json";

const Home = () => {
  const [countryName, setCountryName] = useState("");
  const [countriesToRender, setCountriesToRender] = useState(COUNTRIES.slice(0, 5));

  // FILTER COUNTRIES FUNCTION
  const filterCountries = (filterMethod: { region: string; filter: boolean }) => {
    if (!filterMethod.filter) setCountriesToRender(COUNTRIES.slice(0, 5));

    setCountriesToRender((prevCountries) => prevCountries);
  };
  return (
    <div>
      <Header />
      <SearchBar countryName={countryName} setCountryName={setCountryName} filterCountries={filterCountries} />
      <Countries />
    </div>
  );
};

export default Home;
