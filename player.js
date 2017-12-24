class Player {
  constructor() { //grant access to the reelvant deck
    this.hand = [];
    this.score = 0;
  }

  // hit() {
  //   dealCard(Player);
  // }

  // stay() {

  // }
}

class Dealer extends Player {
  constructor(deck, player) {
    super();
    this.deck = deck;
    this.player = player;
  }
}

module.exports = {
  Player : Player,
  Dealer : Dealer
}
