import { useEffect, useState } from "react";
import "./Home.css";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Countries from "../components/Countries/Countries";
import axios from "axios";

const Home = () => {
  const [countryName, setCountryName] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [countriesToRender, setCountriesToRender] = useState([]);
  // FILTER COUNTRIES DISPLAY FUNCTION
  const filterCountriesDisplay = (filterMethod: { region: string; filter: boolean }) => {
    if (!filterMethod.filter) {
      setCountriesToRender(allCountries);
    } else {
      setCountriesToRender((prevCountries) => prevCountries.filter(({ region }) => region === filterMethod.region));
    }
  };
  // API FUNCTION
  useEffect(() => {
    const countriesCall = async () => {
      const res = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,region,capital,population,flags,subregion,currencies,languages,borders"
      );
      setCountriesToRender(res.data);
      setAllCountries(res.data);
    };
    countriesCall();
  }, []);
  return (
    <div>
      <Header />
      <SearchBar countryName={countryName} setCountryName={setCountryName} filterCountriesDisplay={filterCountriesDisplay} />
      <Countries countriesToRender={countriesToRender} />
    </div>
  );
};

export default Home;
// https://restcountries.com/v3.1/all
