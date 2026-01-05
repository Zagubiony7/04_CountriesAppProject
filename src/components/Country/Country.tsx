import "./Country.css";
import { type CountryProps } from "../../../data";

const Country = ({ name, flag, population, region, capital }: CountryProps) => {
  return (
    <li key={name} className="country">
      <img src={flag} alt={`${name} flag image`} className="country-flag" />
      <div className="country-details">
        <h1>{name}</h1>
        <p>
          Population: <span> {population}</span>
        </p>
        <p>
          Region: <span> {region}</span>
        </p>
        <p>
          Capital: <span> {capital}</span>
        </p>
      </div>
    </li>
  );
};

export default Country;
