import React, { Component } from 'react';
import styled from 'styled-components';
import Pokemon from './Pokemon';

// TODO - Work on Generator Func for displaying
// // generator function to populate more pokemon
// function* DisplayMore(array, func) {
//   // helper function
//   const createPokemon = (start, end) => {
//     return array.slice(start, end).map(pokemon => {
//       return (
//         <Pokemon
//           showDetailsWindow={func}
//           pokemon={pokemon}
//           key={pokemon.name}
//           name={pokemon.name}
//           url={pokemon.url}
//         />
//       );
//     });
//   };

//   const pokemons0To250 = createPokemon(0, 250);
//   yield pokemons0To250;

//   const pokemons251To500 = createPokemon(251, 500);
//   yield pokemons251To500;

//   const pokemons501To750 = createPokemon(501, 750);
//   yield pokemons501To750;

//   const pokemons751ToEnd = createPokemon(750, 1000);
//   yield pokemons751ToEnd;
// }

// styled-components
const ShowMoreButton = styled.button`
  margin-bottom: 15px;
  margin-right: 15px;
  bottom: 0;
  right: 0;
  height: 50px;
  width: 50px;
  position: fixed;
  border: solid #ef5350;
  border-width: 0 10px 10px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  outline: none;
  -webkit-transform: rotate(45deg);
  background-color: rgba(255,255,255,0);
`;

const ButtonText = styled.div`
  margin-right: 10px;
  bottom: 0;
  right: 0;
  border: none;
  text-align: center;
  height: 100px;
  position: fixed;
  width: 65px;
  color: #ef5350;
  cursor: pointer;
  transition: transform 0.2s;
  font-weight: bold;
  :hover {
    transform: scale(1.1);
  }
`;

class View extends Component {
  // TODO for generator func
  constructor(props) {
    super(props);
  //   this.showPokemons = this.showPokemons.bind(this);
  }

  // showPokemons() {
  //   // extract collection
  //   const {
  //     listOfPokeMonToDisplay,
  //     yieldPokemons,
  //   } = this.state;
  //   // push in new batch
  //   listOfPokeMonToDisplay.push(yieldPokemons.next().value);
  //   this.setState({ listOfPokeMonToDisplay });
  // }

  render() {
    const { pokemonList, showDetailsWindow } = this.props;
    const displayPokemon = pokemonList.map(pokemon => {
      return (
        <Pokemon
          showDetailsWindow={showDetailsWindow}
          pokemon={pokemon}
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      )
    })
    return (
      <div>
        {displayPokemon}
        <ButtonText onClick={this.showPokemons}>Click for More!</ButtonText>
        <ShowMoreButton />
      </div>
    );
  }
}

export default View;
