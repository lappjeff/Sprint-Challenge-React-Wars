import React, { Component } from 'react'
import './StarWars.scss'

import Card from './Card.js'

export default class CharacterCard extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='character-container'>
        {this.props.characters.map(character => (
          <Card
          key={Date.now() + Math.random(1, 1000)}
          name={character.name}
          gender={`${this.props.capitalize(character.gender)}`}
          birthYear={character.birth_year}
          height={this.props.toFeet(character.height)}
          />
        ))}
      </div>
    )
  }
}
