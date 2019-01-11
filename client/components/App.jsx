require("babel-polyfill");
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import Search from './Search';
import '../styles/App.css';
import Pokemon from './Pokemon';

const mapStateToProps = state => ({
  show: state.pokemonReducer.show
})

const mapDispatchToProps = dispatch => ({
  fetchPokemons: (pokemon) => dispatch(actions.allPokemons(pokemon)),
});

class App extends Component {

  componentDidMount = async () => {
    const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon')
      .then(data => data.json())
      .then(response => response.results);
    this.props.fetchPokemons(pokemon);
  }

  render() {
    return (
      <div>
        <Search />
        {this.props.show && <Pokemon />}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
