import "./Country.css";
import { type CountryProps } from "../../../data";
const Country = ({ country }: CountryProps) => {
  const {
    name: { common },
    flags: { png, alt },
    population,
    region,
    capital: [capital],
  } = country;
  return (
    <li key={common} className="country">
      <img src={png} alt={alt} className="country-flag" />
      <div className="country-details">
        <h1>{common}</h1>
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
