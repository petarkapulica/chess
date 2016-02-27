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
      $(".chess").find("[data-field='" + value + "']").children('span').addClass('js-active-dot');
    },

    drawMove : function(move)
    {
      var myAttr = $('.js-marked').attr('data-piece');
      move.removeClass();
      move.removeAttr('data-piece');
      $('.js-active-dot').removeClass('js-active-dot');
      var classes = $('.js-marked').attr('class').split(' ');
      $.each(classes,function(key,value){
        move.addClass(value);
        $('.js-marked').removeAttr('data-piece').removeClass(value);
      });
      move.addClass('js-moved').attr('data-piece', myAttr);
      $('.js-marked').removeClass('js-marked');
    }
  };
  return ChessView;
});
