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
        if( $(nextField).hasClass(player) || $(nextField).length == 0 )
        {
          return false;
        }
        else if (
					$(nextField).hasClass('white') ||
					$(nextField).hasClass('black') ||
					$(nextField).hasClass('js-tmp-click')	//added for chess
				)
        {
          this.possibleFieldsToMoveTo.push($(nextField).attr('data-field'));
					if( !$(nextField).hasClass('js-marked') )
					{
						return false;
					}
        }
        else
        {
          this.possibleFieldsToMoveTo.push($(nextField).attr('data-field'));
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
        if( $(nextField).hasClass(player) || $(nextField).length == 0  )
        {
          return false;
        }
        else if ( $(nextField).attr("data-color") == tmpColorArray.pop() )
        {
          return false;
        }
        else if(
					$(nextField).hasClass('black') ||
					$(nextField).hasClass('white') ||
					$(nextField).hasClass('js-tmp-click') 	//added for chess
				)
        {
          this.possibleFieldsToMoveTo.push($(nextField).attr('data-field'));
					if( !$(nextField).hasClass('js-marked') )
					{
						return false;
					}
        }
        else
        {
          this.possibleFieldsToMoveTo.push($(nextField).attr('data-field'));
          tmpColorArray.push( $(nextField).attr("data-color") );
        }
      }
    }

	};
	return ChessModelRock;
});
