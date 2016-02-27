;
define([
  'models/rock/rock',
  'models/bishop/bishop'
],function(Rock, Bishop){

	var ChessModelQueen = function(){

	};

	ChessModelQueen.prototype = {

		queenRule : function(queen)
		{
      var moves = [];
      var diagonals = new Bishop().bishopRule(queen);
      var verticals = new Rock().rockRule(queen);
      var moves = $.merge( diagonals, verticals );
      return moves;
		}

	};
	return ChessModelQueen;
});
