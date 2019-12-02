import React from 'react'

const LetterButton = props => {
  return (
    <button
      onClick={() => props.handleButtonClick(props.letter)}
      disabled={
        props.lettersGuessed.includes(props.letter) ||
        props.gameStatus === 'lost'
      }
    >
      {props.letter.toUpperCase()}
    </button>
  )
}

export default LetterButton
