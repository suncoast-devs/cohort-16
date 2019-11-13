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
// getting values as a parallel array
// const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
const suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts']

const deck = []
const playerHand = []

// get values using a if statement
const getCardValue = rank => {
  if (rank === 'Ace') {
    return 11
  } else if (rank === 'King' || rank === 'Queen' || rank === 'Jack') {
    return 10
  } else {
    return parseInt(rank)
  }
}

const main = () => {
  // for (let i = 0; i < suits.length; i++) {
  //   for (let j = 0; j < ranks.length; j++) {
  //     const card = {
  //       rank: ranks[j],
  //       suit: suits[i],
  //       value: getCardValue(ranks[j])
  //     }
  //     deck.push(card)
  //   }
  // }

  suits.forEach(suit => {
    ranks.forEach(rank => {
      const card = {
        rank: rank,
        suit: suit,
        value: getCardValue(rank)
      }
      deck.push(card)
    })
  })

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
  let drawnCard = deck.pop()
  playerHand.push(drawnCard)
  drawnCard = deck.pop()
  playerHand.push(drawnCard)
  drawnCard = deck.pop()
  playerHand.push(drawnCard)

  // loop over the user hand, and create an li for each item and append to the dom
  document.querySelector('.player-hand').textContent = ''
  // while (document.querySelector('.player-hand').childNodes.length > 0) {
  //   document.querySelector('.player-hand').removeChild(document.querySelector('.player-hand').firstChild)
  // }

  // for (let i = 0; i < playerHand.length; i++) {
  //   const card = playerHand[i]
  //   const cardLi = document.createElement('li')
  //   cardLi.textContent = card.rank + ' of ' + card.suit
  //   document.querySelector('.player-hand').appendChild(cardLi)
  // }

  const listItems = playerHand.map(card => {
    const cardLi = document.createElement('li')
    cardLi.textContent = card.rank + ' of ' + card.suit
    return cardLi
  })

  console.log(listItems)
  listItems.forEach(listItem => {
    document.querySelector('.player-hand').appendChild(listItem)
  })

  let sum = 0
  for (let i = 0; i < playerHand.length; i++) {
    sum += playerHand[i].value
  }
  document.querySelector('.player-sum').textContent = sum
}
document.addEventListener('DOMContentLoaded', main)
document.querySelector('button').addEventListener('click', dealACard)
