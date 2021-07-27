import React from 'react';
import './App.css';
import pokemons from './data.js';
import Header from './header';
import Pokedex from './pokedex';

function App() {
  return (
    <div>
      <Header className="header"/>
      <main className="main">
        <Pokedex key={ pokemons.id } pokemons={ pokemons } />
      </main>
    </div>
  );
}

export default App;
