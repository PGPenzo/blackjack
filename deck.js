// listing the components of cards
var ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
var suits = ['H', 'D', 'C', 'S'];
var cards = [];

//creating the prototype of cards
class Card {
  constructor(rank,suit) {
    this.rank = rank;
    this.suit = suit;
    this.visible = false;
  }

  flipCard() {
    this.visible = !this.visible;
  }
}

// creating the prototype of decks, based on cards
class Deck {
  constructor() {
    this.cards = [];
  }

  makeDeck() {
    for (var r = 0; r < ranks.length; r++) {
      for (var s = 0; s < suits.length; s++) {
        cards.push(new Card(ranks[r], suits[s]));
      }
    }
    return this.cards = cards;
  }

  shuffleDeck() {
    for (var j = 0; j < this.cards.length; j++) {
      var k = Math.floor(Math.random() * this.cards.length);
      var temp = this.cards[j];
      this.cards[j] = this.cards[k];
      this.cards[k] = temp;
    }
  }

  dealCard() {
    return this.cards.shift();
  }

}

module.exports = Deck;
