import * as ActionTypes from './action';

const initialState = {
  selectedPokemon: '',
};

const reducer = (previousState = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ActionTypes.SELECTED_POKEMON:
      return {
        selectedPokemon: action.payload,
      };
    default:
      return previousState;
  }
};

export default reducer;
