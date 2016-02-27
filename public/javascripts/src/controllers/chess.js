;
define([
     'mapper/chess',
     'models/chess',
     'views/chess'
],function(ChessMapper, ChessModel, ChessView){

  var ChessController = function(){
      new ChessMapper();
      $('body').on('click', '.black, .white', $.proxy(this.onPieceClick,this));
      $('body').on('click', '.js-active-dot', $.proxy(this.movePiece,this));
  };

  ChessController.prototype = {

  	player : 'white',

  	piece : {
  		name : null,
  		position : null,
  		player : null,
  		field : null
  	},

  	onPieceClick : function(event)
  	{
  		if( this.checkIfPlayersTurn(event) )
      {
          this.markPiece(event);
  				this.showPossibleMoves();
      }
  	},

    checkIfPlayersTurn : function(event)
    {
        return ( $(event.currentTarget).hasClass(this.player) );
    },

    markPiece : function(event)
    {
        if( $(event.currentTarget).hasClass('js-marked') )
        {
            return false;
        }
        else
        {
            $('.js-marked').removeClass('js-marked');
            $(event.currentTarget).addClass('js-marked');
  					$('.js-active-dot').removeClass('js-active-dot');
        }
    },

  	movePiece : function(event)
  	{
  			new ChessView().drawMove( $(event.currentTarget).parent() );
        this.player == "white" ?
        this.player = "black" :
        this.player = "white";
  	},

  	showPossibleMoves : function()
  	{
  		this.getPiece();
  		new ChessView().drawPossibleMoves(
  			new ChessModel().getPossibleMoves(this.piece)
  		);
  	},

  	getPiece : function()
  	{
  		var piece = $('.js-marked');
      this.piece.name = $(piece).attr('data-piece');
  		this.piece.field = $(piece).attr('data-color');
  		this.piece.position = parseInt($(piece).attr('data-field'));
  		this.piece.player = $(piece).attr('class').indexOf('white') > -1 ?
  		'white' : 'black';
  	}
  };
  return ChessController;
});
