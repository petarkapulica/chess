;
define([
      'models/knight/knight',
     	'models/bishop/bishop',
			'models/peon/peon',
      'models/rock/rock',
      'models/queen/queen'
],function(Knight, Bishop, Peon, Rock, Queen){

	var ChessModel = function(){

	};

	ChessModel.prototype = {

		getPossibleMoves : function(piece)
		{
			switch (piece.name) {
				case 'knight':
					return new Knight().knightRule(piece);
					break;
				case 'bishop':
					return new Bishop().bishopRule(piece);
					break;
				case 'peon':
					return new Peon().peonRule(piece);
					break;
        case 'rock':
					return new Rock().rockRule(piece);
					break;
        case 'queen':
					return new Queen().queenRule(piece);
					break;
			}
		}

	};
	return ChessModel;
});
