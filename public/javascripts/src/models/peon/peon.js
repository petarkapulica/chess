;
define([

],function(){

	var ChessModelPeon = function(){

	};

	ChessModelPeon.prototype = {

		possibleFieldsToMoveTo : [],

		peonRule : function(peon)
		{
      this.possibleFieldsToMoveTo = [];
			var color = peon.field;
			var player = peon.player;
			var fieldNo = peon.position;
      this.peonMoving(color, player, fieldNo);
      this.peonEating(color, player, fieldNo);
      return this.possibleFieldsToMoveTo;
		},

    peonMoving : function(color, player, fieldNo)
    {
      var jump = player === "white" ? 8 : -8;
      var nextField = $('.chess > div[data-field = ' + (fieldNo + jump) + ']');
      if( $(nextField).hasClass('black') || $(nextField).hasClass('white') )
      {
        return false;
      }
      this.possibleFieldsToMoveTo.push(nextField);
      var nextField = $('.chess > div[data-field = ' + (fieldNo + 2*jump) + ']');
      if(
        $(nextField).hasClass('black') ||
        $(nextField).hasClass('white') ||
        $('.chess > div[data-field = ' + fieldNo + ']').hasClass('js-moved')
      )
      {
        return false;
      }
      this.possibleFieldsToMoveTo.push(nextField);
    },

    peonEating : function(color, player, fieldNo)
    {
      var jump1 = player === "white" ? 7 : -7;
      var jump2 = player === "white" ? 9 : -9;
      var nextField = $('.chess > div[data-field = ' + (fieldNo + jump1) + ']');
      if(
          !$(nextField).hasClass(player) &&
          $(nextField).attr('data-color') === color &&
          ( $(nextField).hasClass('black') ||$(nextField).hasClass('white') )
        )
      {
        this.possibleFieldsToMoveTo.push(nextField);
      }
      var nextField = $('.chess > div[data-field = ' + (fieldNo + jump2) + ']');
      if(
          !$(nextField).hasClass(player) &&
          $(nextField).attr('data-color') === color &&
          ( $(nextField).hasClass('black') ||$(nextField).hasClass('white') )
        )
      {
        this.possibleFieldsToMoveTo.push(nextField);
      }
    }

	};
	return ChessModelPeon;
});
