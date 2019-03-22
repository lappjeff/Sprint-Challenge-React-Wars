import React, { Component } from 'react';
import './App.scss';

import CharacterCard from './components/CharacterCard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }
  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  cmToFeet = number => {
    const toFeet = (number / 30.48);
    const round = toFeet.toFixed(2)
    return `${round.charAt(0)}'${round.charAt(2)}`
  }

  capitalize = name => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  render() {
    this.capitalize('jeff')
    return (

      <div className="App">
        <h1>Star Wars Character List</h1>
        <CharacterCard
        characters={this.state.starwarsChars}
        toFeet={this.cmToFeet}
        capitalize={this.capitalize} />
      </div>
    );
  }
}

export default App;
