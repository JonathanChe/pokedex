import * as ActionTypes from '../constants/constants';

export function selectedPokemon(pokemon) {
  return {
    type: ActionTypes.SELECTED_POKEMON,
    payload: pokemon,
  };
}

