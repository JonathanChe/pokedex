import * as actionTypes from '../client/constants/constants';
import {
  toggleShow,
  allPokemons,
  matchedPokemon,
} from '../client/actions/actions';

describe('actions', () => {

  const mockPokemonList = [
    {
      name: 'bulbasaur',
    },
    {
      name: 'charmander',
    },
    {
      name: 'squirtle',
    },
    {
      name: 'pikachu',
    },
  ];

  describe('Action: toggleShow', () => {
    it('should create an action to toggle show', () => {
      const expectedActionToggleShow = {
        type: actionTypes.TOGGLE_SHOW,
      };
      expect(toggleShow()).toEqual(expectedActionToggleShow);
    });
  });

  describe('Action: allPokemons', () => {
    it('should create an action to obtain all pokemons', () => {
      const expectedActionAllPokemons = {
        type: actionTypes.ALL_POKEMON,
        payload: mockPokemonList,
      };
      expect(allPokemons(mockPokemonList)).toEqual(expectedActionAllPokemons);
    });
  });

  describe('Action: matchedPokemon', () => {
    it('should create an action to obtain all matched pokemons', () => {
      const expectedActionMatchedPokemon = {
        type: actionTypes.MATCHED_POKEMON,
        payload: mockPokemonList,
      };
      expect(matchedPokemon(mockPokemonList)).toEqual(expectedActionMatchedPokemon);
    });
  });
});
