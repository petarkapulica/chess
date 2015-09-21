;
define([

],function(){

	var ChessModelBishop = function(){

	};

	ChessModelBishop.prototype = {

		possibleFieldsToMoveTo : [],

		bishopRule : function(bishop)
		{
      this.possibleFieldsToMoveTo = [];
			var color = bishop.field;
			var player = bishop.player;
			var fieldNo = bishop.position;
      this.diagonalMovement(color, player, fieldNo, 9); //top left diagonal
      this.diagonalMovement(color, player,fieldNo, 7); //top right diagonal
      this.diagonalMovement(color, player,fieldNo, -7); //bottom left diagonal
      this.diagonalMovement(color, player,fieldNo, -9); //bottom right diagonal
      return this.possibleFieldsToMoveTo;
		},

    diagonalMovement : function( color, player, fieldNo, jump )
    {
      for (field = jump; field < 65 && field > -65; field += jump)
      {
        var nextField = $('.chess > div[data-field = ' + (fieldNo + field) + ']');
        if( $(nextField).hasClass(player) || $(nextField).attr('data-color') !== color  )
        {
          return false;
        }
        else if ( $(nextField).hasClass('white') || $(nextField).hasClass('black') )
        {
          this.possibleFieldsToMoveTo.push(nextField);
          return false;
        }
        else
        {
					this.possibleFieldsToMoveTo.push(field+fieldNo);
          //this.possibleFieldsToMoveTo.push(nextField);
        }
      }
    }
	};
	return ChessModelBishop;
});
