import { combineReducers } from 'redux';
import * as actionTypes from '../constants/constants';
import findMatches from '../../helpers';

const initialState = {
  allPokemons: [],
  matchedPokemons: [],
  show: false,
  displayPokemon: {},
}

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ALL_POKEMON:
      return {
        ...state,
        allPokemons: action.payload,
      };
    case actionTypes.TOGGLE_SHOW:
      return {
        ...state,
        show: !state.show,
      };
    case actionTypes.MATCHED_POKEMON:
      return {
        ...state,
        matchedPokemons: findMatches(action.payload, state.allPokemons),
      };
    case actionTypes.DISPLAY_POKEMON:
      return {
        ...state,
        displayPokemon: action.payload,
      };
    case actionTypes.SET_SHOW_TO_FALSE:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  pokemonReducer,
});

export default rootReducer;
