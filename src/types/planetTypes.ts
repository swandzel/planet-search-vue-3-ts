export interface Planet {
  name: string;
  population: string;
  rotation_period: string;
  climate: string;
  gravity: string;
  created: string;
  url: string;
}

export interface PlanetApi extends Planet {
  url: string;
}