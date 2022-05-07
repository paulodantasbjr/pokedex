import { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import { HeaderViewProps } from './Header.types';

export const HeaderView = ({ type }: HeaderViewProps) => {
  const [search, setSearch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && search.length > 0) {
        e.preventDefault();
        setSearch('');
        navigate(`/pokemon/${search}`);
      }
    };

    inputRef.current?.addEventListener('keydown', handleKeyDown);
  }, [navigate, search]);

  return (
    <header className="w-full h-full flex flex-col gap-4">
      <div className=" flex relative p-1 mt-4">
        {search.length > 0 && (
          <Link to={`/pokemon/${search}`}>
            <FaSearch className="absolute text-sky-700 top-1/3 right-2 cursor-pointer" />
          </Link>
        )}
        <input
          name="search"
          value={search}
          ref={inputRef}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Charmander"
          required
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-semibold uppercase tracking-widest ml-1 text-indigo-500">Types: </h3>
        <nav className="flex flex-col items-center gap-2  ">
          <Link
            className='className="text-white uppercase text-center tracking-widest w-32 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"'
            to={'/'}
          >
            All
          </Link>
          {type.map((type, index) => (
            <Link
              to={`/type/${index + 1}`}
              className="text-white uppercase text-center tracking-widest w-32 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              type="button"
              key={type.name}
            >
              {type.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
