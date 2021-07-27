import React from 'react';
import './App.css';
// import PropType from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, image } = this.props.pokemon;
    const { value, measurementUnit } = this.props.pokemon.averageWeight;
    return (
      <div className="div-card">
        <div className="pokemon-card">
          <div className="col1">
            <p>{ name }</p>
            <p>{ type }</p>
            <p>Average weight: { value } { measurementUnit }</p>
          </div>
          <div className="col2">
            <img src={ image } alt={ name } />
          </div>
        </div>
      </div>
    );
  }
}

// Pokemon.propType = {

// }

export default Pokemon;
