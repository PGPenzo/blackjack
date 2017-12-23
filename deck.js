// listing the components of cards
var ranks = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
var suits = ['H', 'D', 'C', 'S'];

//creating the prototype of cards
class Card {
  constructor(rank,suit) {
    this.rank = rank;
    this.suit = suit;
  }
}

// creating the prototype of decks, based on cards
class Deck {
  constructor() {
    this.deck = [];
  }

  makeDeck() {
    for (var r = 0; r < ranks.length; r++) {
      for (var s = 0; s < suits.length; s++) {
        var newCard = (new Card(this.rank = ranks[r], this.suit = suits[s]));
        this.deck.push(newCard);
      }
    }
    return this.deck;
  }

  shuffleDeck() {
    for (var j = 0; j < this.deck.length; j++) {
      var k = Math.floor(Math.random() * this.deck.length);
      var temp = this.deck[j];
      this.deck[j] = this.deck[k];
      this.deck[k] = temp;
    }
  }

  // dealCard(player) {
  //   var dealtCard = this.deck[0];
  //   player.hand.push(dealtCard);
  //   this.deck.splice(0,1);
  // }
}

module.exports = Deck;
