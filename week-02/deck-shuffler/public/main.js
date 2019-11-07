const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]
const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts']

const deck = []

const main = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const card = {
        rank: ranks[j],
        suit: suits[i]
      }
      deck.push(card)
    }
  }
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * 52)
    const temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  console.log(deck)
}

const dealACard = () => {
  // document.querySelector('.player-hand').textContent = deck[0]
  document.querySelector('.player-hand').textContent =
    'You drew the ' + deck[0].rank + ' of ' + deck[0].suit
}
document.addEventListener('DOMContentLoaded', main)
document.querySelector('button').addEventListener('click', dealACard)
