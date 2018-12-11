// npm imports
import React from 'react';
import styled from 'styled-components';

const PokemonStyles = styled.button`
  height: 200px;
  width: 200px;
  margin: 5px;
  float: left;
  font-size: 16px;
  border: 1px solid red;
  background-color: #FFC40E;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  :focus {
    outline: none;
  };
  :hover {
    background-color: yellow;
  }
`;

const Pokemon = (props) => {
  const { showDetailsWindow, pokemon: { name, url } } = props;
  return (
    <PokemonStyles
      name={name}
      onClick={(e) => showDetailsWindow(e, url)}
    >
      {name}
    </PokemonStyles>
  );
};

export default Pokemon;
