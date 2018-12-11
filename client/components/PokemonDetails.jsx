import React, { Component } from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';

import DetailName from './DetailName';

const DetailsStylePage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border: 1px solid #ef5350;
  background-color: #f5f5f5;
  border-radius: 10px;
  height: 800px;
  width: 800px;
  overflow: scroll;
`;

const LoadingNotification = styled.div`
  line-height: 800px;
  font-size: 50px;
  text-align: center;
  font-style: italic;
`;

const HeaderStyles = styled.h1`
  text-align: center;
`;

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonDetails: null,
      errorMessage: null,
    };
  }

  componentDidMount() {
    const { name, url } = this.props;
    fetch(url)
      .then(res => res.json())
      .then(response => this.setState({ pokemonDetails: response }))
      .catch(err => {
        console.error('Error fetching PokemonDetails ', err);
        this.setState({ errorMessage: 'Unable to get Details! :(' });
      });
  }

  handleClickOutside() {
    // return to main view if user clicks outside of details section
    this.props.exitDetails();
  }

  render() {
    const { pokemonDetails, errorMessage } = this.state;
    let pokemonDetailsKeys;
    let pokemonDetailsList;

    if (pokemonDetails) {
      pokemonDetailsKeys = Object.keys(pokemonDetails).sort();
      pokemonDetailsList = pokemonDetailsKeys.map(details => (<DetailName key={details} detailName={details} details={pokemonDetails[details]} />));
    }

    return (
      <DetailsStylePage>
        <HeaderStyles>Pokemon : {pokemonDetails ? pokemonDetails.name : 'Loading...'} </HeaderStyles>
        {pokemonDetails
          ? pokemonDetailsList
          : (
            <LoadingNotification>
              {errorMessage ? errorMessage : 'Loading...'}
            </LoadingNotification>
          )
        }
      </DetailsStylePage>
    );
  }
}

export default onClickOutside(PokemonDetails);
