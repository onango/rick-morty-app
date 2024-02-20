export interface Info {
  count: number;
  pages: number;
  next: string | string;
  prev: null | string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
  Genderless = "genderless",
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Character;
  url: string;
  created: Date;
}

export interface LocationRequest {
  info: Info;
  results: Location[];
}

export enum GenderApiRequest {
  Female = "female",
  Male = "male",
  Unknown = "unknown",
  Genderless = "genderless",
}

export interface CharacterRequest {
  info: Info;
  results: Character[];
}