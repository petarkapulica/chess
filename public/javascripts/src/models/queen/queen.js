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
      var a = new Bishop().bishopRule(queen);
      debugger;
		}

	};
	return ChessModelQueen;
});
