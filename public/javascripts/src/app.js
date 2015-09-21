;
requirejs.config(SiteConfig);

require([
  'jquery',
  'controllers/chess'
],function($, ChessController) {

  $(function(){

    new ChessController();

  });

});
