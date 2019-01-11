import * as ActionTypes from '../client/constants/constants';
import { selectedPokemon } from '../client/actions/actions';

describe('action objects', () => {
  xit('should create an action to select a pokemon', () => {
    const pokemon = 'bulbasaur';
    const expectedAction = {
      type: ActionTypes.SELECTED_POKEMON,
      payload: pokemon,
    };
    const wrongAction = {
      type: ActionTypes.SELECTED_POKEMON,
      payload: 'pikachu',
    };
    expect(selectedPokemon(pokemon)).toEqual(expectedAction);
    expect(selectedPokemon(pokemon)).not.toEqual(wrongAction);
  });
});
