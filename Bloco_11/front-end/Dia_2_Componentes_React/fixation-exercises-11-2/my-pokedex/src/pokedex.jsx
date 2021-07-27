import React from 'react'
import "./App.css";
import PropType from 'prop-types';
import Pokemon from './pokemon';

class pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="content">
        {pokemons.map((pokemon) => <Pokemon className="pokedex" key={ pokemon.id } pokemon={ pokemon } />)}
      </div>
    );
  }
}

pokedex.propType = {
  pokemons: PropType.arrayOf(PropType.object).isRequired,
};

export default pokedex;
