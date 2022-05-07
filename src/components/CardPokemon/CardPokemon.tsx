import { useEffect, useState } from 'react';

import { fetchData } from 'utils/fetchData';

import { CardPokemonView } from './CardPokemonView';

export const CardPokemon = ({ pokemon }) => {
  const [singlePokemon, setSinglePokemon] = useState({});
  const urlPokemon = pokemon.url;

  useEffect(() => {
    const fetchPokemon = async () => {
      const fetchPokemon = await fetchData(urlPokemon);
      setSinglePokemon(fetchPokemon);
    };
    fetchPokemon();
  }, [urlPokemon]);

  return <CardPokemonView singlePokemon={singlePokemon} />;
};
