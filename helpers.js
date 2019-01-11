function findMatches(wordToMatch, pokemons) {
  if (pokemons.length !== 0) {
    return pokemons.filter(pokemon => {
      const regex = new RegExp(wordToMatch, 'gi');
      return pokemon.name.match(regex);
    });
  }
}

export default findMatches;
