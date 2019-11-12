// "legacy" fetch/then
// const getJoke = () => {
//   console.log('going out to api')
//   fetch('https://official-joke-api.appspot.com/random_joke')
//     .then(response => {
//       console.log('back from the api')
//       console.log(response)
//       return response.json()
//     })
//     .then(jokeData => {
//       console.log(jokeData)
//       displayData(jokeData)
//     })
// }

let jokeData
// "modern" async/await
const getJoke = async () => {
  console.log('going out to api')
  document.querySelector('.punchline').textContent = ''

  const response = await fetch(
    'https://official-joke-api.appspot.com/random_joke'
  )
  console.log('back from api')
  console.log(response)
  jokeData = await response.json()
  console.log(jokeData)
  displayData(jokeData)
}

const revealPunchline = () => {
  document.querySelector('.punchline').textContent = jokeData.punchline
}

const displayData = jokeData => {
  document.querySelector('.setup').textContent = jokeData.setup
}

document.querySelector('.tell-me-a-joke').addEventListener('click', getJoke)
document
  .querySelector('.reveal-punchline')
  .addEventListener('click', revealPunchline)
