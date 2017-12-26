// import relevant files & set up objects
var Deck = require('./deck.js');
var players = require('./player.js');


var gameFunctions = module.exports = {};
//set up Game actions

 gameFunctions.newGame = function() { // function will need number of players input
  deck = new Deck;
  deck.makeDeck();
  deck.shuffleDeck();

  dealer  = new players.Dealer(deck);

// number of players created based on the input
  player1 = new players.Player(deck);
  player2 = new players.Player(deck);

//for number of players, distribute cards
  gameFunctions.hit(player1, deck);
  gameFunctions.hit(player2, deck);
  gameFunctions.hit(dealer, deck);
  gameFunctions.hit(player1, deck);
  gameFunctions.hit(player2, deck);
  dealer.takeCard(deck.dealCard());

// start the GAME
  player1.changeTurn();
}

gameFunctions.endGame = function() {
  console.log('END GAME');
}

gameFunctions.hit = function(player, deck) {
  var dealtCard = deck.dealCard();
  dealtCard.flipCard();
  player.takeCard(dealtCard);
  player.calculateScore(dealtCard);
  player.isBust();
}

gameFunctions.stay = function(player) {
  player.changeTurn();
}

// setting up the game
// var deck1 = new Deck;
// deck1.makeDeck();
// deck1.shuffleDeck();
// var dealer  = new players.Dealer(deck1);
// var player1 = new players.Player(deck1);
// var player2 = new players.Player(deck1);



//test player 1 round
// hit(player1, deck1);
// hit(player1, deck1);
// hit(player1, deck1);
//
// stay(player1);
//
// console.log(player1);
