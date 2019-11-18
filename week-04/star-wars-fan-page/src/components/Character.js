import React from 'react'

const Character = props => {
  return (
    <li>
      <img src={props.image} />
      <h2>{props.name}</h2>
      <p>{props.tagline}</p>
    </li>
  )
}

export default Character
