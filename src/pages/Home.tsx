import { useEffect, useState } from "react";
import "./Home.css";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Countries from "../components/Countries/Countries";
import axios from "axios";
import { type COUNTRY_DATA_TYPES } from "../../data";

const Home = () => {
  const [countryName, setCountryName] = useState("");
  const [allCountries, setAllCountries] = useState<COUNTRY_DATA_TYPES[]>([]);
  const [countriesToRender, setCountriesToRender] = useState<COUNTRY_DATA_TYPES[]>([]);
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
      try {
        const res = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,region,capital,population,flags,subregion,currencies,languages,borders"
        );
        setCountriesToRender(res.data);
        setAllCountries(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    countriesCall();
  }, []);

  // Find Country
  const findCountry = (country: string) => {
    const nameOfCountry = country.toLowerCase();
    const displayCounty = allCountries.filter((c) => c.name.common.toLowerCase().includes(nameOfCountry));
    if (displayCounty.length >= 1) {
      setCountriesToRender(displayCounty);
    } else {
      alert("Country not found, try again");
      setCountryName("");
      setCountriesToRender(allCountries);
    }
  };
  return (
    <div>
      <Header />
      <SearchBar
        countryName={countryName}
        setCountryName={setCountryName}
        filterCountriesDisplay={filterCountriesDisplay}
        findCountry={findCountry}
      />
      <Countries countriesToRender={countriesToRender} />
    </div>
  );
};

export default Home;