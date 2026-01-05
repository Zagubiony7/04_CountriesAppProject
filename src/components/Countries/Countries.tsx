import "./Countries.css";
import Country from "../Country/Country";
import { type CountryProps } from "../../../data";

const Countries = ({ countriesToRender }: { countriesToRender: CountryProps[] }) => {
  return (
    <ul className="countries">
      {countriesToRender.map((countryData, i: number) => (
        <Country key={i} country={countryData} />
      ))}
    </ul>
  );
};

export default Countries;
