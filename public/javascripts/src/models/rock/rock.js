;
define([

],function(){

	var ChessModelRock = function(){

	};

	ChessModelRock.prototype = {

		possibleFieldsToMoveTo : [],

		rockRule : function(rock)
		{
      this.possibleFieldsToMoveTo = [];
			var color = rock.field;
			var player = rock.player;
			var fieldNo = rock.position;
      this.verticalMovement(color, player, fieldNo, 8); //top
      this.verticalMovement(color, player, fieldNo, -8); //bottom
      this.horizontalMovement(color, player, fieldNo, 1); //left
      this.horizontalMovement(color, player, fieldNo, -1); //right
      return this.possibleFieldsToMoveTo;
		},

    verticalMovement : function( color, player, fieldNo, jump )
    {
      for (field = jump; field < 65 && field > -65 ; field += jump)
      {
        var nextField = $('.chess > div[data-field = ' + (fieldNo + field) + ']');
        if( $(nextField).hasClass(player) )
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
          this.possibleFieldsToMoveTo.push(nextField);
        }
      }
    },

    horizontalMovement : function( color, player, fieldNo, jump )
    {
      var tmpColorArray = [];
      tmpColorArray.push(color);
      for (field = jump; field < 65 && field > -65 ; field += jump)
      {
        var nextField = $('.chess > div[data-field = ' + (fieldNo + field) + ']');
        if( $(nextField).hasClass(player) )
        {
          return false;
        }
        else if ( $(nextField).attr("data-color") == tmpColorArray.pop() )
        {
          return false;
        }
        else if( $(nextField).hasClass('black') || $(nextField).hasClass('white')  )
        {
          this.possibleFieldsToMoveTo.push(nextField);
          return false;
        }
        else
        {
          this.possibleFieldsToMoveTo.push(nextField);
          tmpColorArray.push( $(nextField).attr("data-color") );
        }
      }
    }

	};
	return ChessModelRock;
});
