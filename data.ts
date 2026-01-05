import type { Dispatch, SetStateAction } from "react";
export type CountryProps = {
  flag: string;
  name: string;
  population: string | number;
  region: string;
  capital: string | undefined;
};

export type SearchBarProps = {
  countryName: string;
  setCountryName: Dispatch<SetStateAction<string>>;
  filterCountriesDisplay: (filterMethod: { region: string; filter: boolean }) => void;
};

export type Countries = {
  onFilterMethod: (arg: string) => void;
};
