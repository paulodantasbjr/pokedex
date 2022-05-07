import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { pokemonSingleState } from 'atoms/pokemonAtom';
import { useRecoilState } from 'recoil';

import { fetchData } from 'utils/fetchData';

import { PokemonView } from './PokemonView';

export const Pokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useRecoilState(pokemonSingleState);

  useEffect(() => {
    const fetchSinglePokemonData = async () => {
      const data = await fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(data);
    };
    fetchSinglePokemonData();
  }, [id, setPokemon]);

  return <PokemonView pokemon={pokemon} />;
};
