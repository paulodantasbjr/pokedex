import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { pokemonState } from 'atoms/pokemonAtom';
import { useRecoilState } from 'recoil';

import { fetchData } from 'utils/fetchData';

import { PokemonsView } from './PokemonsView';

export const Pokemons = () => {
  const { id } = useParams();
  const [pokemons, setPokemons] = useRecoilState(pokemonState);

  useEffect(() => {
    if (id) {
      const fetchTypeData = async () => {
        const data = await fetchData(`https://pokeapi.co/api/v2/type/${id}`);
        const dataFilter = data.pokemon.map((pokemon) => pokemon.pokemon).slice(0, 20);
        setPokemons(dataFilter);
      };
      fetchTypeData();
    }
  }, [id, setPokemons]);

  useEffect(() => {
    if (!id) {
      const fetchAllData = async () => {
        const data = await fetchData('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
        setPokemons(data.results);
      };
      fetchAllData();
    }
  }, [id, setPokemons]);

  return <PokemonsView pokemons={pokemons} />;
};
