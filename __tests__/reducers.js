import rootReducer from '../client/reducers/reducers';
import * as actionTypes from '../client/constants/constants';
import findMatches from '../helpers';

const initialState = {
  pokemonReducer: {
    allPokemons: [],
    matchedPokemons: [],
    show: false,
    displayPokemon: {},
  },
};

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

describe('Reducers', () => {

  describe('reducer: ALL_POKEMON', () => {
    it('should obtain all pokemons', () => {

      const initialAction = {
        type: actionTypes.ALL_POKEMON,
        payload: mockPokemonList,
      };

      const expectedResult = {
        pokemonReducer: {
          allPokemons: mockPokemonList,
          matchedPokemons: [],
          show: false,
          displayPokemon: {},
        },
      };

      expect(rootReducer(initialState, initialAction)).toEqual(expectedResult);
    });
  });

  describe('reducer: TOGGLE_SHOW', () => {
    it('should toggle show', () => {

      const initialAction = {
        type: actionTypes.TOGGLE_SHOW,
      };

      const expectedResult = {
        pokemonReducer: {
          allPokemons: [],
          matchedPokemons: [],
          show: true,
          displayPokemon: {},
        },
      };

      expect(rootReducer(initialState, initialAction)).toEqual(expectedResult);
    });
  });

  describe('reducer: MATCHED_POKEMON', () => {
    it('should toggle show', () => {

      const initialAction = {
        type: actionTypes.MATCHED_POKEMON,
        payload: 'pikachu',
      };

      const state = {
        pokemonReducer: {
          allPokemons: mockPokemonList,
          matchedPokemons: [],
          show: false,
          displayPokemon: {},
        },
      };

      const expectedResult = {
        pokemonReducer: {
          allPokemons: mockPokemonList,
          matchedPokemons: [
            {
              name: 'pikachu',
            },
          ],
          show: false,
          displayPokemon: {},
        },
      };

      expect(rootReducer(state, initialAction)).toEqual(expectedResult);
    });
  });
});
