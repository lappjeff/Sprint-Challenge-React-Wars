import React from 'react'

const Card = props => {
  return (
    <div className='card-container'>
      <h2>{props.name}</h2>
      <ul className='card-details'>
        <li><p><strong>Gender</strong>: {props.gender}</p></li>
        <li><p><strong>Birthyear</strong>: {props.birthYear}</p></li>
        <li><p><strong>Height</strong>: {props.height}</p></li>
      </ul>
    </div>
  )
}

export default Card
