import React, { useState } from 'react'
import words from '../data/words.json'

const HomePage = () => {
  const [selectedWord, setSelectedWord] = useState('apple')
  // words[Math.floor(Math.random() * words.length)]

  const [strikes, setStrikes] = useState(7)

  const [lettersGuessed, setLettersGuessed] = useState([])

  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const letterClicked = letter => {
    console.log(letter)
    // check if the letter is in the selectedWord
    // if yes then show it
    if (!(selectedWord.indexOf(letter) >= 0)) {
      setStrikes(prev => {
        return prev - 1
      })
    }

    if (!lettersGuessed.includes(letter)) {
      setLettersGuessed([...lettersGuessed, letter])
    }
  }

  return (
    <main>
      <section>{strikes}</section>
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
                <button
                  onClick={() => letterClicked(letter)}
                  disabled={lettersGuessed.includes(letter)}
                >
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
