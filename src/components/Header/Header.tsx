import { useEffect } from 'react';

import { pokemonAllTypeState } from 'atoms/pokemonAtom';
import { useRecoilState } from 'recoil';

import { fetchData } from 'utils/fetchData';

import { HeaderView } from './HeaderView';

export const Header = () => {
  const [type, setType] = useRecoilState(pokemonAllTypeState);

  useEffect(() => {
    const fetchAllTypesData = async () => {
      const data = await fetchData('https://pokeapi.co/api/v2/type');
      setType(data.results);
    };
    fetchAllTypesData();
  }, [setType]);

  return <HeaderView type={type} />;
};
