import React from 'react'
import words from '../data/words.json'

const HomePage = () => {
  console.log(words)

  const [selectedWord, setSelectedWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  )

  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const letterClicked = letter => {
    console.log(letter)
  }

  return (
    <main>
      <img src="" alt="snowman" />
      <section>
        <ul>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
        </ul>
      </section>
      <section>
        <header>guessed letters: </header>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
          <li>d</li>
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
