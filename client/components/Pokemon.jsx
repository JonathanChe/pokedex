import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  pokemon: state.pokemonReducer.displayPokemon,
})

const Pokemon = props => {
  const { pokemon } = props;

  let pokemonDetails;

  if (pokemon.name) {
    const { id, base_experience, height, name, weight } = pokemon;
    pokemonDetails = { id, base_experience, height, name, weight };
  } else {
    pokemonDetails = 'Loading...'
  }

  return (
    <div className="pokemon">
      {pokemonDetails !== 'Loading...'
        ? <>
            <h3>Name: {(pokemonDetails.name).toUpperCase()} </h3>
            <div>id: {pokemonDetails.id}</div>
            <div>base_experience: {pokemonDetails.base_experience}</div>
            <div>height: {pokemonDetails.height}</div>
            <div>weight: {pokemonDetails.weight}</div>
          </>
        : pokemonDetails
      }
    </div>
  )
}

export default connect(mapStateToProps, null)(Pokemon);
