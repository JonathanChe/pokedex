export const SELECTED_POKEMON = 'SELECTED_POKEMON';

export function selectedPokemon(pokemon) {
  return {
    type: SELECTED_POKEMON,
    payload: pokemon,
  };
}
