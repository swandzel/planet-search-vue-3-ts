import { Ref } from "vue";

export interface Planet {
  name: string;
  population: string;
  rotation_period: string;
  climate: string;
  gravity: string;
  created: string;
}

export interface PlanetApi extends Planet {
  url: string;
}

export interface Field {
  key: string;
  label: string;
}

export interface UseFetchPlanets {
  planets: Ref<PlanetApi[]>;
  next: Ref<string | null>;
  prev: Ref<string | null>;
  errorMessage: Ref<string>;
  fetchPlanets: (search: string, page: number) => void;
}

export enum SortOrder {
  Ascending = "asc",
  Descending = "desc",
}
