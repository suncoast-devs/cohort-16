import React, { useState } from 'react'
import words from '../data/words.json'

const HomePage = () => {
  const [selectedWord, setSelectedWord] = useState('apple')
  // words[Math.floor(Math.random() * words.length)]

  const [lettersGuessed, setLettersGuessed] = useState([])

  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const letterClicked = letter => {
    console.log(letter)
    // check if the letter is in the selectedWord
    // if yes then show it
    if (selectedWord.indexOf(letter) >= 0) {
      console.log(selectedWord, 'contains', letter)
    }

    // always add the letter to the letters guessed
    setLettersGuessed([...lettersGuessed, letter])
  }

  return (
    <main>
      <img src="" alt="snowman" />
      <section>
        <ul>
          {selectedWord.split('').map((letter, index) => {
            if (lettersGuessed.includes(letter)) {
              return <li key={index}>{letter}</li>
            } else {
              return <li key={index}>_</li>
            }
          })}
        </ul>
      </section>
      <section>
        <header>guessed letters: </header>
        <ul>
          {lettersGuessed.map(letter => {
            return <li key={letter}>{letter}</li>
          })}
        </ul>
      </section>
      <section>
        <ul className="letter-buttons">
          {letters.map(letter => {
            return (
              <li key={letter}>
                <button onClick={() => letterClicked(letter)}>
                  {letter.toUpperCase()}
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default HomePage
