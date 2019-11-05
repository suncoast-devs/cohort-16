// DONE: on page load, generate a random number
// DONE: when the user clicks the button, we check if the inputted number === generated number
// DONE: if the user guessed the correct number, display message of success

// DONE: Add a counter to count the number of times guessed
// DONE: limit the number of guesses to 7
// TODO: Add a message for too high/too low

let randomNumber = 0
let numberOfGuesses = 0

const main = () => {
  randomNumber = Math.ceil(Math.random() * 10)
  console.log(randomNumber)
}

const checkTheNumbers = () => {
  // get the number from the HTML input
  const userGuess = parseInt(document.querySelector('input').value)
  numberOfGuesses++
  console.log(userGuess)
  console.log(typeof userGuess)
  console.log(typeof randomNumber)
  // check if the number === randomNumber
  if (randomNumber === userGuess && numberOfGuesses <= 7) {
    // if yes, show success message
    console.log('success')
    document.querySelector('.output-message').textContent =
      'Success! You guessed the number in ' + numberOfGuesses + ' tries'
  } else if (numberOfGuesses >= 7) {
    document.querySelector('.output-message').textContent =
      'Sorry, you have guessed too many times. Play again?'
    document.querySelector('button').disabled = true
  } else {
    // if no (else), show try again message
    if (randomNumber > userGuess) {
      document.querySelector('.output-message').classList.add('too-low')
      document.querySelector('.output-message').classList.remove('too-high')

      document.querySelector('.output-message').textContent =
        'Try Again with a bigger number!'
    } else if (randomNumber < userGuess) {
      document.querySelector('.output-message').textContent =
        'Try Again with a smaller number!'
      document.querySelector('.output-message').classList.add('too-high')
      document.querySelector('.output-message').classList.remove('too-low')
    }
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('button').addEventListener('click', checkTheNumbers)
