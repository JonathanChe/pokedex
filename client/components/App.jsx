// npm installs
import React, { Component } from 'react';
import View from './View';

// rel path imports
import NavBar from './NavBar';
import PokemonDetails from './PokemonDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberOfPokemon: 0,
      pokemonList: [],
      showDetailsWindow: false,
      pokemonDetailsUrl: '',
      pokemonName: '',
    };

    // binding the context of 'this'
    this.showDetailsWindow = this.showDetailsWindow.bind(this);
    this.exitDetails = this.exitDetails.bind(this);
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => res.json())
      .then((response) => {
        const { count, results } = response;
        this.setState({
          numberOfPokemon: count,
          pokemonList: results,
      })
      .catch(err => console.error('Error fetching data ', err));
    });
  }

  showDetailsWindow(e, url) {
    const { name } = e.target;
    this.setState({
      showDetailsWindow: true,
      pokemonName: name,
      pokemonDetailsUrl: url,
    });
  }

  exitDetails() {
    this.setState({ showDetailsWindow: false });
  }

  render() {
    const {
      pokemonList,
      numberOfPokemon,
      pokemonDetailsUrl,
      pokemonName,
      showDetailsWindow,
    } = this.state;

    return (
      <div>
        <NavBar count={numberOfPokemon} />
        {showDetailsWindow
          ? (
            <PokemonDetails
              name={pokemonName}
              url={pokemonDetailsUrl}
              exitDetails={this.exitDetails}
            />)
          : (
            <View
              pokemonList={pokemonList}
              showDetailsWindow={this.showDetailsWindow}
              showPokemons={this.showPokemons}
            />)
        }
      </div>
    );
  }
}

export default App;
