;
define([
  
],function(){

  var ChessView = function(){

  };

  ChessView.prototype = {

    drawPossibleMoves : function(possibleMoves)
    {
      $.each( possibleMoves, $.proxy(this.drawDot, this));
    },

    drawDot : function(key,value)
    {
      $(value).children('span').addClass('js-active-dot');
    },

    drawMove : function(move)
    {
      move.removeClass();
      $('.js-active-dot').removeClass('js-active-dot');
      var classes = $('.js-marked').attr('class').split(' ');
      $.each(classes,function(key,value){
        move.addClass(value);
        $('.js-marked').removeClass(value);
      });
      move.addClass('js-moved');
      $('.js-marked').removeClass('js-marked');
    }
  };
  return ChessView;
});
