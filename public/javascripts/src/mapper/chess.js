;
define([

],function(){

  var ChessMapper = function(){
      this.setPieces();
  };

  ChessMapper.prototype = {

  	setPieces : function()
  	{
      var chessBoard = $('.chess');
      chessBoard.children('div').eq(63).addClass('white rock-white');
      chessBoard.children('div').eq(56).addClass('white rock-white');
      chessBoard.children('div').eq(62).addClass('white knight-white');
      chessBoard.children('div').eq(57).addClass('white knight-white');
      chessBoard.children('div').eq(58).addClass('white bishop-white');
      chessBoard.children('div').eq(61).addClass('white bishop-white');
      chessBoard.children('div').eq(60).addClass('white king-white');
      chessBoard.children('div').eq(59).addClass('white queen-white');
      chessBoard.children('div').eq(55).addClass('white peon-white');
      chessBoard.children('div').eq(54).addClass('white peon-white');
      chessBoard.children('div').eq(53).addClass('white peon-white');
      chessBoard.children('div').eq(52).addClass('white peon-white');
      chessBoard.children('div').eq(51).addClass('white peon-white');
      chessBoard.children('div').eq(50).addClass('white peon-white');
      chessBoard.children('div').eq(49).addClass('white peon-white');
      chessBoard.children('div').eq(48).addClass('white peon-white');

      chessBoard.children('div').eq(0).addClass('black rock-black');
      chessBoard.children('div').eq(7).addClass('black rock-black');
      chessBoard.children('div').eq(1).addClass('black knight-black');
      chessBoard.children('div').eq(6).addClass('black knight-black');
      chessBoard.children('div').eq(2).addClass('black bishop-black');
      chessBoard.children('div').eq(5).addClass('black bishop-black');
      chessBoard.children('div').eq(3).addClass('black queen-black');
      chessBoard.children('div').eq(4).addClass('black king-black');
      chessBoard.children('div').eq(8).addClass('black peon-black');
      chessBoard.children('div').eq(9).addClass('black peon-black');
      chessBoard.children('div').eq(10).addClass('black peon-black');
      chessBoard.children('div').eq(11).addClass('black peon-black');
      chessBoard.children('div').eq(12).addClass('black peon-black');
      chessBoard.children('div').eq(13).addClass('black peon-black');
      chessBoard.children('div').eq(14).addClass('black peon-black');
      chessBoard.children('div').eq(15).addClass('black peon-black');
  	}
  };
  return ChessMapper;
});
