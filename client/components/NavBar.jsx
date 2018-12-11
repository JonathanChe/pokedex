// npm installs
import React from 'react';
import styled from 'styled-components';

const NavStyles = styled.div`
  height: 7.5vh;
  border: 1px solid #ef5350; 
  background-color: #ef5350;
  margin-bottom: 5px;
`;

const Header = styled.h1`
  color: white;
  text-align: center;
`;

const NavBar = (props) => {
  const { count } = props;

  return (
    <NavStyles>
      <Header> PokeDex - {count} Total Pokemons! </Header>
    </NavStyles>
  );
};

export default NavBar;
