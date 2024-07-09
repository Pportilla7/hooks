import React from 'react';
import useFetchCharacters  from './hooks/useFecthCharacters';
import Character from './components/Character';
import './App.css';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/56';
const urlRick = 'https://rickandmortyapi.com/api/character/115';

function App() {
  const { data: pokemonData, loading: pokemonLoading, error: pokemonError } = useFetchCharacters(urlPokemon);
  const { data: rickData, loading: rickLoading, error: rickError } = useFetchCharacters(urlRick);

  if (pokemonLoading || rickLoading) return <div>Loading...</div>;
  if (pokemonError) return <div>Error loading Pokemon data: {pokemonError.message}</div>;
  if (rickError) return <div>Error loading Rick and Morty data: {rickError.message}</div>;

  return (
    <div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Personaje Pokemon</h2>
        {pokemonData && <Character name={pokemonData.name} image={pokemonData.sprites.front_default} />}
        <h2>Personaje Rick and Morty</h2>
        {rickData && <Character name={rickData.name} image={rickData.image} />}
      </div>
    </div>
  );
}

export default App;
