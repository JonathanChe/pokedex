import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import List from './List';

const mapStateToProps = state => ({
  show: state.pokemonReducer.show,
  matchedPokemons: state.pokemonReducer.matchedPokemons,
});

const mapDispatchToProps = dispatch => ({
  matches: (input) => dispatch(actions.matchedPokemon(input)),
  setShowToFalse: () => dispatch(actions.setShowToFalse())
});

const Search = props => {
  const { show, matchedPokemons, matches, setShowToFalse } = props;

  const displayMatched = matchedPokemons.map(pokemon => <List id={pokemon.name} key={pokemon.name} pokemon={pokemon} />);

  return (
    <form className="search-form">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        onChange={(e) => {
          matches(e.target.value)
          setShowToFalse()
        }}
      />
      <ul className="suggestions">
        {!show && displayMatched}
      </ul>
    </form>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
