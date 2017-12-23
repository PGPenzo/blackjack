class Player {
  constructor(deck) { //grant access to the reelvant deck
    this.hand = [];
    this.score = 0;
  }

  // hit() {
  //   dealCard(Player);
  // }

  stay() {

  }
}

var deck = [0, 1, 2, 3, 4]
var player1 = new Player;
// player1.hit();

module.exports = Player;
