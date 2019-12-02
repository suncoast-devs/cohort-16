import React, { useState, useEffect } from 'react'
import words from '../data/words.json'

import step0 from '../images/step_0.png'
import step1 from '../images/step_1.png'
import step2 from '../images/step_2.png'
import step3 from '../images/step_3.png'
import step4 from '../images/step_4.png'
import step5 from '../images/step_5.png'
import step6 from '../images/step_6.png'
import step7 from '../images/step_7.png'

const images = [step0, step1, step2, step3, step4, step5, step6, step7]

const HomePage = () => {
  const [selectedWord, setSelectedWord] = useState('apple')
  // words[Math.floor(Math.random() * words.length)]

  const [strikes, setStrikes] = useState(7)
  const [lettersGuessed, setLettersGuessed] = useState([])
  const [gameStatus, setGameStatus] = useState('playing')

  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const letterClicked = letter => {
    console.log(letter)
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

  return (
    <main>
      <section>{strikes}</section>
      <img src={images[strikes]} alt="snowman" />
      <section>
        <ul>
          {selectedWord.split('').map((letter, index) => {
            if (lettersGuessed.includes(letter) || gameStatus === 'lost') {
              return <li key={index}>{letter}</li>
            } else {
              return <li key={index}>_</li>
            }
          })}
        </ul>
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
                <button
                  onClick={() => letterClicked(letter)}
                  disabled={
                    lettersGuessed.includes(letter) || gameStatus === 'lost'
                  }
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
