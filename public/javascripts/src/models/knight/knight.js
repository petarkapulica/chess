;
define([

],function(){

	var ChessModelKnight = function(){

	};

	ChessModelKnight.prototype = {

		possibleFieldsToMoveTo : [],

		knightRule : function(knight)
		{
      this.possibleFieldsToMoveTo = [];
			var color = knight.field;
			var player = knight.player;
			var fieldNo = knight.position;
			var fields = $('.chess div[data-color!="' + color + '"]:not(".' + player + '")');
			$.each( fields, $.proxy(this.getKnightFields, this, fieldNo));
      return this.possibleFieldsToMoveTo;
		},

		getKnightFields : function( fieldNo, key, value )
		{
			if
			(
				parseInt($(value).attr('data-field')) - 17 == fieldNo ||
				parseInt($(value).attr('data-field')) - 15 == fieldNo ||
				parseInt($(value).attr('data-field')) - 10 == fieldNo ||
				parseInt($(value).attr('data-field')) - 6 == fieldNo ||
				parseInt($(value).attr('data-field')) + 6 == fieldNo ||
				parseInt($(value).attr('data-field')) + 10 == fieldNo ||
				parseInt($(value).attr('data-field')) + 15 == fieldNo ||
				parseInt($(value).attr('data-field')) + 17 == fieldNo
			)
			{
				this.possibleFieldsToMoveTo.push($(value).attr('data-field'));
			}
		}
	};
	return ChessModelKnight;
});
