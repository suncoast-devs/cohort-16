import React from 'react'

const SelectedWordDisplay = props => {
  return (
    <ul>
      {props.selectedWord.split('').map((letter, index) => {
        if (
          props.lettersGuessed.includes(letter) ||
          props.gameStatus === 'lost'
        ) {
          return <li key={index}>{letter}</li>
        } else {
          return <li key={index}>_</li>
        }
      })}
    </ul>
  )
}

export default SelectedWordDisplay
