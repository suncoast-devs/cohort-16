// DONE: on page load, generate a random number
// TODO: when the user clicks the button, we check if the inputted number === generated number
// TODO: if the user guessed the correct number, display message of success

let randomNumber = 0

const main = () => {
  randomNumber = Math.ceil(Math.random() * 10)
  console.log(randomNumber)
}

const checkTheNumbers = () => {
  // get the number from the HTML input
  const userGuess = parseInt(document.querySelector('input').value)
  console.log(userGuess)
  console.log(typeof userGuess)
  console.log(typeof randomNumber)
  // check if the number === randomNumber
  if (randomNumber === userGuess) {
    // if yes, show success message
    console.log('success')
    document.querySelector('.output-message').textContent = 'Success!'
  } else {
    // if no (else), show try again message
    console.log('nope')
    document.querySelector('.output-message').textContent = 'Nope! Try again!'
  }
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('button').addEventListener('click', checkTheNumbers)
