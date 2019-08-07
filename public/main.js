const cardShuffle = document.querySelector('.card-shuffle')
const GetDeck = document.querySelector('.shuffle-output')
const cardSuit = document.querySelector('#card-suit')
const cardRank = document.querySelector('#card-rank')

class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
  }
}

const deck = []
const Card1 = new Card('Ace', 'Spades')

console.log(Card1)

const rank = [
  'Ace',
  '1',
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
const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds']

const getDeck = () => {
  for (let s = 0; s < suits.length; s++) {
    for (let i = 0; i < rank.length; i++) {
      deck.push(new Card(rank[i], suits[s]))
    }
  }
  console.log(deck)
  console.log(deck[Math.floor(Math.random() * deck.length)])
}

const shuffle = () => {
  //  const randomCard = deck[Math.floor(Math.random() * deck.length)]
  //  let firstCard = deck[0]
  //  firstCard = randomCard
  const firstCard = deck[Math.floor(Math.random() * deck.length)]

  console.log(firstCard)
  console.log(firstCard.suit)
  console.log(firstCard.rank)

  const cardSuit = document.querySelector('#card-suit')
  const cardRank = document.querySelector('#card-rank')

  cardSuit.textContent = String(firstCard.suit)
  cardRank.textContent = String(firstCard.rank)
  // console.log(shuffle)
}
// console.log(shuffle)

document.querySelector('.shuffle-button').addEventListener('click', getDeck)
