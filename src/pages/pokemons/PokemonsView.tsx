import { CardPokemon } from 'components/CardPokemon/CardPokemon';

export const PokemonsView = ({ pokemons }) => {
  return (
    <div className="w-full p-2 flex flex-col gap-4">
      {pokemons.map((pokemon) => (
        <CardPokemon key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};
