export interface ContinentProps {
  id: number;
  title: string;
  description: string;
  path: string;
  about: string;
  bg: string;
  totalCountries: number;
  totalLanguages: number;
}

export interface CityProps {
  id: number;
  name: string;
  bg: string;
  country: {
    flag: string;
    name: string;
  };
  continentId: number;
}
