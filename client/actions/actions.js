import * as actionTypes from '../constants/constants';

function fetchingSinglePokemon(url) {
  return fetch(url);
}

export const allPokemons = (pokemons) => ({
  type: actionTypes.ALL_POKEMON,
  payload: pokemons,
});

export const matchedPokemon = (matches) => ({
  type: actionTypes.MATCHED_POKEMON,
  payload: matches,
});

export const toggleShow = () => ({
  type: actionTypes.TOGGLE_SHOW,
});

export const setShowToFalse = () => ({
  type: actionTypes.SET_SHOW_TO_FALSE,
});

export const displayPokemonAsync = (url) => {
  return function (dispatch) {
    fetchingSinglePokemon(url)
      .then(data => data.json())
      .then(response => dispatch({ type: 'DISPLAY_POKEMON', payload: response}))
      .catch(err => console.error(err))
  }
}