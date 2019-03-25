import React, { Component } from 'react';
import './App.scss';

import CharacterCard from './components/CharacterCard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [
      ],
      next: '',
      previous: '',
      current: ''

    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/?page=1');
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
        console.log('Current page', data)
        this.setState({ starwarsChars: data.results, next: data.next, previous: data.previous, current: URL })
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  //used for changing height data within API from centimeters to feet
  cmToFeet = number => {
    const toFeet = (number / 30.48);
    const round = toFeet.toFixed(2)
    return `${round.charAt(0)}'${round.charAt(2)}`
  }

  //used to capitalize first letter of gender data within API
  capitalize = name => {
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  changePage = direction => {
    if (this.state.previous === 'https://swapi.co/api/people/?page=8') {
      this.getCharacters('https://swapi.co/api/people/?page=1')
    }
    // else if (this.state.current === 'https://swapi.co/api/people/?page=2') {
    //   this.getCharacters('https://swapi.co/api/people/?page=9')
    // }
    else if (direction > 0) {
      this.getCharacters(this.state.next)
    } else if (direction < 0){
      this.getCharacters(this.state.previous);
    }
  }

  render() {
    return (

      <div className="App">
        <h1>Star Wars Character List</h1>
        <button onClick={() => {this.changePage(-1)}}>Prev Character List</button>
        <button onClick={() => {this.changePage(1)}}>Next Character List</button>

        <CharacterCard
        characters={this.state.starwarsChars}
        planets={this.state.starwarsPlanets}
        toFeet={this.cmToFeet}
        capitalize={this.capitalize} />
      </div>
    );
  }
}

export default App;
