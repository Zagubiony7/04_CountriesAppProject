import "./Countries.css";
import COUNTRIES from "../../../data.json";
import Country from "../Country/Country";

const Countries = () => {
  const countries = COUNTRIES.slice(0, 9);
  return (
    <ul className="countries">
      {countries.map(({ flag, name, population, region, capital }) => (
        <Country key={name} flag={flag} name={name} population={population} region={region} capital={capital} />
      ))}
    </ul>
  );
};

export default Countries;
