class Player {
  constructor(deck) { //grant access to the reelvant deck
    this.hand = [];
    this.score = 0;
    this.turn = false;
  }

  takeCard(deck) {
    return this.hand.push(deck);
  }

  startTurn() {
    this.turn = true;
  }
  
  endTurn() {
    return this.turn = false;
  }

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
