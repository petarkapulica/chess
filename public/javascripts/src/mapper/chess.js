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
      chessBoard.children('div').eq(63).addClass('white rock-white').attr('data-piece','rock');
      chessBoard.children('div').eq(56).addClass('white rock-white').attr('data-piece','rock');
      chessBoard.children('div').eq(62).addClass('white knight-white').attr('data-piece','knight');
      chessBoard.children('div').eq(57).addClass('white knight-white').attr('data-piece','knight');
      chessBoard.children('div').eq(58).addClass('white bishop-white').attr('data-piece','bishop');
      chessBoard.children('div').eq(61).addClass('white bishop-white').attr('data-piece','bishop');
      chessBoard.children('div').eq(60).addClass('white king-white').attr('data-piece','king');
      chessBoard.children('div').eq(59).addClass('white queen-white').attr('data-piece','queen');
      chessBoard.children('div').eq(55).addClass('white peon-white').attr('data-piece','peon');
      chessBoard.children('div').eq(54).addClass('white peon-white').attr('data-piece','peon');
      chessBoard.children('div').eq(53).addClass('white peon-white').attr('data-piece','peon');
      chessBoard.children('div').eq(52).addClass('white peon-white').attr('data-piece','peon');
      chessBoard.children('div').eq(51).addClass('white peon-white').attr('data-piece','peon');
      chessBoard.children('div').eq(50).addClass('white peon-white').attr('data-piece','peon');
      chessBoard.children('div').eq(49).addClass('white peon-white').attr('data-piece','peon');
      chessBoard.children('div').eq(48).addClass('white peon-white').attr('data-piece','peon');

      chessBoard.children('div').eq(0).addClass('black rock-black').attr('data-piece','rock');
      chessBoard.children('div').eq(7).addClass('black rock-black').attr('data-piece','rock');
      chessBoard.children('div').eq(1).addClass('black knight-black').attr('data-piece','knight');
      chessBoard.children('div').eq(6).addClass('black knight-black').attr('data-piece','knight');
      chessBoard.children('div').eq(2).addClass('black bishop-black').attr('data-piece','bishop');
      chessBoard.children('div').eq(5).addClass('black bishop-black').attr('data-piece','bishop');
      chessBoard.children('div').eq(3).addClass('black queen-black').attr('data-piece','queen');
      chessBoard.children('div').eq(4).addClass('black king-black').attr('data-piece','king');
      chessBoard.children('div').eq(8).addClass('black peon-black').attr('data-piece','peon');
      chessBoard.children('div').eq(9).addClass('black peon-black').attr('data-piece','peon');
      chessBoard.children('div').eq(10).addClass('black peon-black').attr('data-piece','peon');
      chessBoard.children('div').eq(11).addClass('black peon-black').attr('data-piece','peon');
      chessBoard.children('div').eq(12).addClass('black peon-black').attr('data-piece','peon');
      chessBoard.children('div').eq(13).addClass('black peon-black').attr('data-piece','peon');
      chessBoard.children('div').eq(14).addClass('black peon-black').attr('data-piece','peon');
      chessBoard.children('div').eq(15).addClass('black peon-black').attr('data-piece','peon');
  	}
  };
  return ChessMapper;
});
