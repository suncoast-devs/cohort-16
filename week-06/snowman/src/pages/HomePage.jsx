import React, { useState, useEffect } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'

import words from '../data/words.json'

import Snowman from '../components/Snowman'
import SelectedWordDisplay from '../components/SelectedWordDisplay.jsx'
import LetterButton from '../components/LetterButton.jsx'

const HomePage = () => {
  const [selectedWord, setSelectedWord] = useState('apple')
  // words[Math.floor(Math.random() * words.length)]

  const [strikes, setStrikes] = useState(7)
  const [lettersGuessed, setLettersGuessed] = useState([])
  const [gameStatus, setGameStatus] = useState('playing')

  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const letterClicked = letter => {
    if (!(selectedWord.indexOf(letter) >= 0)) {
      setStrikes(prev => {
        return prev > 0 ? prev - 1 : prev
      })
    }

    if (!lettersGuessed.includes(letter)) {
      // check to see if the word was guessed
      let numberOfCorrectGuesses = 0
      selectedWord.split('').forEach(letter => {
        if (lettersGuessed.includes(letter)) {
          numberOfCorrectGuesses++
        }
      })
      // // using reduce as well,
      // const numberOfCorrectGuessesReduced = selectedWord
      //   .split('')
      //   .reduce((acc, letter) => {
      //     if (lettersGuessed.includes(letter)) {
      //       acc++
      //     }
      //     return acc
      //   })

      if (numberOfCorrectGuesses === selectedWord.length) {
        setGameStatus('won')
      }
      setLettersGuessed([...lettersGuessed, letter])
    }
  }

  useEffect(() => {
    if (strikes === 0) {
      setGameStatus('lost')
    }
  }, [strikes])

  useEffect(() => {
    // find the body/#root, attach an event
  }, [])

  return (
    <main>
      <KeyboardEventHandler
        handleKeys={letters}
        onKeyEvent={(key, e) => {
          letterClicked(key)
        }}
      />
      <Snowman bananas={strikes} />
      <section>
        <SelectedWordDisplay
          selectedWord={selectedWord}
          gameStatus={gameStatus}
          lettersGuessed={lettersGuessed}
        />
        {gameStatus === 'lost' && (
          <section>The word was {selectedWord}</section>
        )}
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
                <LetterButton
                  handleButtonClick={letterClicked}
                  letter={letter}
                  gameStatus={gameStatus}
                  lettersGuessed={lettersGuessed}
                />
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default HomePage
