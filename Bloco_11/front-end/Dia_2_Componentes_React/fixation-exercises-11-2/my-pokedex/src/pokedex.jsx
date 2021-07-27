import React from 'react'
import PropType from 'prop-types';
import Pokemon from './pokemon';

class pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div>
        {pokemons.map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />)}
      </div>
    );
  }
}

pokedex.propType = {
  pokemons: PropType.arrayOf(PropType.object).isRequired,
};

export default pokedex;
