class Dealer {
  constructor(deck, player) {
    this.hand = [];
    this.score = 0;
    this.deck = deck;
    this.player = player;
  }

  dealCard(deck, player) {
    var temp = deck[0];
    player.hand.push(temp);
    // this.deck.splice(0,1);
    return player.hand;
  }


}




module.exports = Dealer;
