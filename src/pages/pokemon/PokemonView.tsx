export const PokemonView = ({ pokemon }) => {
  return (
    <div>
      <p>{pokemon.id}</p>
      <h1>{pokemon.name}</h1>
      <div>
        <img src={pokemon.sprites?.other['official-artwork'].front_default} alt="" />
      </div>
      <div>
        {pokemon.abilities?.map((ability) => (
          <div key={ability.ability.name}>
            <h3>{ability.ability.name}</h3>
          </div>
        ))}
      </div>
      <div>
        <span>{pokemon.height}</span>
        <span>{pokemon.weight}</span>
      </div>
    </div>
  );
};
