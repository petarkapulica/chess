;
define([

],function(){

	var ChessModelKing = function(){

	};

	ChessModelKing.prototype = {

		possibleFieldsToMoveTo : [],

		kingRule : function(king)
		{
      this.possibleFieldsToMoveTo = [];
      var color = king.field;
			var player = king.player;
			var fieldNo = king.position;
      this.diagonalMovement(color, player, fieldNo);
      this.straightMovement(color, player, fieldNo);
      return this.possibleFieldsToMoveTo;
		},

		diagonalMovement : function( color, player, fieldNo )
		{
      var possibleArray = [];
      possibleArray.push(fieldNo + 7, fieldNo - 7, fieldNo + 9, fieldNo - 9);
      $.each(possibleArray, $.proxy(this.iterateDiagonals,this,color,player,fieldNo));
		},

    iterateDiagonals : function(color,player,fieldNo,key,value)
    {
      var move = $('.chess').find("[data-field='" + value + "']");
      if($(move).hasClass(player) || $(move).attr('data-color') !== color )
      {

      }
      else
      {
        this.possibleFieldsToMoveTo.push($(move).attr('data-field'));
      }
    },

    straightMovement : function( color, player, fieldNo )
		{
      var possibleArray = [];
      possibleArray.push(fieldNo + 1, fieldNo - 1, fieldNo + 8, fieldNo - 8);
      $.each(possibleArray, $.proxy(this.iterateStraights,this,color,player,fieldNo));
		},

    iterateStraights : function(color,player,fieldNo,key,value)
    {
      var move = $('.chess').find("[data-field='" + value + "']");
      if($(move).hasClass(player) || $(move).attr('data-color') == color )
      {

      }
      else if( $(move).length > 0 )
      {
        this.possibleFieldsToMoveTo.push($(move).attr('data-field'));
      }
    },

	};
	return ChessModelKing;
});
