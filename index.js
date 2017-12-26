
var Deck = require('./deck.js');
var players = require('./player.js');
var game = require('./blackjack.js');


game.newGame();


game.hit(player1, deck);
console.log(player1.score);
