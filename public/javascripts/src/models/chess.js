;
define([
      'models/knight/knight',
     	'models/bishop/bishop',
			'models/peon/peon',
      'models/rock/rock',
      'models/queen/queen',
      'models/king/king',
      'models/super'
],function(Knight, Bishop, Peon, Rock, Queen, King, SuperObject){

	var ChessModel = function(){

	};

	ChessModel.prototype = {

		getPossibleMoves : function(piece)
		{
			switch (piece.name) {
				case 'knight':
					var moves = new Knight().knightRule(piece);
          return new SuperObject().doMagic(moves, piece.player);
					break;
				case 'bishop':
          var moves = new Bishop().bishopRule(piece);
          return new SuperObject().doMagic(moves, piece.player);
					break;
				case 'peon':
          var moves = new Peon().peonRule(piece);
          return new SuperObject().doMagic(moves, piece.player);
					break;
        case 'rock':
          var moves = new Rock().rockRule(piece);
          return new SuperObject().doMagic(moves, piece.player);
					break;
        case 'queen':
          var moves = new Queen().queenRule(piece);
          return new SuperObject().doMagic(moves, piece.player);
					break;
        case 'king':
          var moves = new King().kingRule(piece);
          return new SuperObject().doMagic(moves, piece.player);
					break;
			}
		}

	};
	return ChessModel;
});
