// import relevant files
var Deck = require('./deck.js');
var players = require('./player.js');

//set up Game actions
var hit = function(player, deck) {
  var dealtCard = deck.dealCard();
  dealtCard.flipCard();
  player.takeCard(dealtCard);
  player.calculateScore(dealtCard);
  player.isBust();
}

var stay = function(player) {
  player.changeTurn();
}


// setting up the game
var deck1 = new Deck;
deck1.makeDeck();
deck1.shuffleDeck();
var dealer  = new players.Dealer(deck1);
var player1 = new players.Player(deck1);
var player2 = new players.Player(deck1);

// stay(player1);

hit(player1, deck1);
hit(player1, deck1);
hit(player1, deck1);

stay(player1);

console.log(player1);
// var dealer1 = new players.Dealer(deck1, player1);
// dealer1.dealCard(deck1, dealer1);

// console.log(dealer1);
// console.log(player1);


// player1.calculateScore();
