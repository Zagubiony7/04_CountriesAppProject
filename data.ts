import type { Dispatch, SetStateAction } from "react";

export type SearchBarProps = {
  countryName: string;
  setCountryName: Dispatch<SetStateAction<string>>;
  filterCountriesDisplay: (filterMethod: { region: string; filter: boolean }) => void;
};

export type Countries = {
  onFilterMethod: (arg: string) => void;
};

export type CountryProps = {
  country: {
    name: { common: string };
    flags: { png: string; alt: string };
    population: string;
    region: string;
    capital: [capital: string];
    currencies: { XCD: { name: string }; symbol: string };
  };
};
