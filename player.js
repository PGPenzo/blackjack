var aceCounter = false; // see the scope of the variable

class Player {
  constructor(deck) {
    this.hand = [];
    this.score = 0;
    this.turn = false;
  }

  takeCard(deck) {
    return this.hand.push(deck);
  }

  calculateScore(deck) {
    var cdrank = deck.rank

// rules for adding scores
    if (cdrank > 1) {
      this.score = this.score + cdrank;
    }
    else if (cdrank === 'J' ||
             cdrank === 'Q' ||
             cdrank === 'K') {
      this.score = this.score + 10;
  }
    else if (cdrank === 'A') {
      aceCounter = true;
      if (this.score + 11 < 22) {
        this.score = this.score + 11;
      }
      else if (!(this.score + 11 < 22)) {
        this.score = this.score + 1;
        }
    }
// handling the edge-case of multiple As
    if (this.score > 21 && aceCounter === true) {
      this.score = this.score - 10;
    }

    return this.score;
  }

// work out if score is bust
  isBust() {
    if (this.score > 21) {
      console.log('END GAME');
    }
    else {
      console.log('NOT BUST');
    }
  }

  changeTurn() {
    this.turn = !this.turn;
  }
  
// end of Player class
}

class Dealer extends Player {
  constructor(deck) {
    super();
  }

}

module.exports = {
  Player : Player,
  Dealer : Dealer
}
