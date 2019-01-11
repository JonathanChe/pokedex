import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(actions.toggleShow()),
  displayPokemonAsync: (url) => dispatch(actions.displayPokemonAsync(url)),
});

const List = ({ toggle, displayPokemonAsync, pokemon: { name, url } }) => {
  return (
    <li onClick={() => {
      toggle();
      displayPokemonAsync(url);
    }}>
      {name}
    </li>
  )
};

export default connect(null, mapDispatchToProps)(List);
