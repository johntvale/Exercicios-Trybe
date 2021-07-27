import React from 'react';
// import PropType from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, type, image } = this.props.pokemon;
    const { value, measurementUnit } = this.props.pokemon.averageWeight;
    return (
      <div>
        <div>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>Average weight: { value } { measurementUnit }</p>
        </div>
        <div>
          <img src={ image } alt={ name } />
        </div>
      </div>
    );
  }
}

// Pokemon.propType = {

// }

export default Pokemon;
