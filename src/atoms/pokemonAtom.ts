import { atom } from 'recoil';

const defaultPokemonState: never[] = [];

const defaultAllPokemonTypeState: never[] = [];

const defaultPokemonSingleState = {};

export const pokemonSingleState = atom({
  key: 'pokemonSingle',
  default: defaultPokemonSingleState,
});

export const pokemonState = atom({
  key: 'pokemon',
  default: defaultPokemonState,
});

export const pokemonAllTypeState = atom({
  key: 'pokemonType',
  default: defaultAllPokemonTypeState,
});
