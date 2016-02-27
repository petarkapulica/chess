;
define([
  'models/knight/knight',
  'models/bishop/bishop',
  'models/peon/peon',
  'models/rock/rock',
  'models/queen/queen',
  'models/king/king'
],function(Knight, Bishop, Peon, Rock, Queen, King){

	var SuperObject = function(){

	};

	SuperObject.prototype = {

    chess : false,

    allPossibleMoves : [],

    moves : null,

    piece : {
  		name : null,
  		position : null,
  		player : null,
  		field : null
  	},

    doMagic : function(moves,player)
    {
      this.allPossibleMoves = [];
      this.moves = moves;
      $.each( this.moves, $.proxy(this.iterateMoves, this, player));
      return this.moves;
    },

    iterateMoves : function(player,key,value)
    {
      $(".chess").find("[data-field='" + value + "']").addClass('js-tmp-click');
      var playerToCheck = "black";
      if(player === "black")
      {
        playerToCheck = "white";
      }
      var figures = $('.chess > div.' + playerToCheck );
      $.each( figures, $.proxy(this.iterateFigures, this));
      this.createUniqueArray();
      this.chess = false;
      $.each( this.allPossibleMoves, $.proxy(this.checkChess, this, player));
      if(this.chess)
      {
        var index = this.moves.indexOf(value);
        if (index > -1)
        {
          delete this.moves[key];
        };
      }
      $('.js-tmp-click').removeClass('js-tmp-click');
    },

    iterateFigures : function(key,value)
    {
      this.createPiece(value);
      switch (true) {
  			case (this.piece.name === "peon" ):
          this.allPossibleMoves = $.merge( this.allPossibleMoves, new Peon().peonRule(this.piece) );
          //this.allPossibleMoves.push( new Peon().peonRule(this.piece) );
  			break;
  			case (this.piece.name === "knight" ):
          this.allPossibleMoves = $.merge( this.allPossibleMoves, new Knight().knightRule(this.piece) );
  			    //  this.allPossibleMoves.push( new Knight().knightRule(this.piece) );
        break;
  			case (this.piece.name === "bishop" ):
          this.allPossibleMoves = $.merge( this.allPossibleMoves, new Bishop().bishopRule(this.piece) );
  			    //  this.allPossibleMoves.push( new Bishop().bishopRule(this.piece) );
        break;
  			case (this.piece.name === "queen" ):
          this.allPossibleMoves = $.merge( this.allPossibleMoves, new Queen().queenRule(this.piece) );
  			    //  this.allPossibleMoves.push( new Queen().queenRule(this.piece) );
        break;
  			case (this.piece.name === "king" ):
          this.allPossibleMoves = $.merge( this.allPossibleMoves, new King().kingRule(this.piece) );
  			// this.allPossibleMoves.push( new King().kingRule(this.piece) );
        break;
  			case (this.piece.name === "rock" ):
         this.allPossibleMoves = $.merge( this.allPossibleMoves, new Rock().rockRule(this.piece) );
  			// this.allPossibleMoves.push( new Rock().rockRule(this.piece) );
        break;
      }
    },

    createPiece : function(piece)
    {
      this.piece.name = $(piece).attr('data-piece');
  		this.piece.field = $(piece).attr('data-color');
  		this.piece.position = parseInt($(piece).attr('data-field'));
  		this.piece.player = $(piece).attr('class').indexOf('white') > -1 ?
  		'white' : 'black';
    },

    createUniqueArray : function()
    {
      this.allPossibleMoves = this.allPossibleMoves.filter(function(item, i, ar){
        return ar.indexOf(item) === i;
      });
    },

    checkChess : function(player,key,value)
    {
      if( $(".chess").find("[data-field='" + value + "']").hasClass('king-' + player) )
      {
        this.chess = true;
      }
    }

	};
	return SuperObject;
});
