import { Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import { Pokemon } from 'pages/pokemon/Pokemon';
import { Pokemons } from 'pages/pokemons/Pokemons';

import { Header } from 'components/Header/Header';

export const Routes = () => {
  return (
    <Suspense fallback={<div>carregando...</div>}>
      <div className="h-screen w-screen flex text-black">
        <div className="w-40 overflow-y-scroll">
          <Header />
        </div>
        <div className="flex-grow flex flex-col items-center gap-4 overflow-y-scroll">
          <Switch>
            <Route path="/" element={<Pokemons />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
            <Route path="/type/:id" element={<Pokemons />} />
          </Switch>
        </div>
      </div>
    </Suspense>
  );
};
