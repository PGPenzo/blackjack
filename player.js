class Player {
  constructor(deck) { //grant access to the reelvant deck
    this.hand = [];
    this.score = 0;
    this.deck = deck;
  }

  // hit() {
  //   dealCard(Player);
  // }

  // stay() {

  // }
}

class Dealer extends Player {
  constructor(deck) {
    super();
    this.deck = deck;
  }
}

module.exports = {
  Player : Player,
  Dealer : Dealer
}
