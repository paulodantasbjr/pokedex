import { Link } from 'react-router-dom';

export const CardPokemonView = ({ singlePokemon }) => {
  return (
    <div className="flex gap-12 p-2 bg-gray-100 shadow-lg rounded-lg items-center justify-around ">
      <div className="w-80  bg-gray-50 flex flex-col text-center justify-around relative">
        <span># {singlePokemon.id}</span>
        <div className="flex items-center justify-center">
          <img className="w-28 h-28" src={singlePokemon.sprites?.front_default} alt="" />
        </div>
        <div className="flex items-center justify-center gap-4">
          {singlePokemon.types?.map((type) => (
            <div key={type.type.name}>
              <h3>{type.type.name}</h3>
            </div>
          ))}
        </div>
        <h1>{singlePokemon.name}</h1>
        <span className="flex items-center justify-center absolute -top-1 -left-4 h-10 w-10 bg-gray-200 shadow rounded-full">
          {singlePokemon.height}
        </span>
        <span className="flex items-center justify-center absolute -bottom-1 -right-4 h-10 w-10 bg-gray-200 shadow rounded-full">
          {singlePokemon.weight}
        </span>
      </div>
      <div className="flex gap-12">
        <div>
          {singlePokemon.stats?.map((stats) => (
            <div className="flex flex-col" key={stats.stat.name}>
              <h3>{stats.stat.name}</h3>
            </div>
          ))}
        </div>
        <div>
          {singlePokemon.stats?.map((stats) => (
            <div className="flex flex-col" key={stats.stat.name}>
              <h3>{stats.base_stat}</h3>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link
          className="text-white cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          to={`/pokemon/${singlePokemon.name}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};
