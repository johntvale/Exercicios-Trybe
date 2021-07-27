import React from 'react';
import './App.css';
import pokemons from './data.js';
import Pokedex from './pokedex';

function App() {
  return (
    <div className="App">
      <Pokedex key={ pokemons.id } pokemons={ pokemons } />
    </div>
  );
}

export default App;
