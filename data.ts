import type { Dispatch, SetStateAction } from "react";

export interface SearchBarProps {
  countryName: string;
  setCountryName: Dispatch<SetStateAction<string>>;
  filterCountriesDisplay: (filterMethod: { region: string; filter: boolean }) => void;
  findCountry: (arg: string) => void;
}

export interface Countries {
  onFilterMethod: (arg: string) => void;
}

export interface CountryProps {
  country: {
    name: { common: string };
    flags: { png: string; alt: string };
    population: string;
    region: string;
    capital: [capital: string];
    currencies: { XCD: { name: string }; symbol: string };
  };
}

export interface COUNTRY_DATA_TYPES {
  name: { common: string };
  region: string;
  capital?: string[];
  population: number;
  flags: { png: string; svg: string };
  subregion?: string;
  currencies?: Record<string, { name: string; symbol: string }>;
  languages?: Record<string, string>;
  borders?: string[];
}
