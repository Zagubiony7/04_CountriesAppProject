import "./Countries.css";
import Country from "../Country/Country";

const Countries = ({ countriesToRender }) => {
  return (
    <ul className="countries">
      {countriesToRender.map(({ flag, name, population, region, capital }) => (
        <Country key={name} flag={flag} name={name} population={population} region={region} capital={capital} />
      ))}
    </ul>
  );
};

export default Countries;
