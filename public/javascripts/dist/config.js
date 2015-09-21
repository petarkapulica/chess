;(function() {

  var config = {
    baseUrl: '/public/javascripts/src',
    paths: {
      jquery: '../../bower/jquery/dist/jquery'
    },
    shim: {

    }
  };

  if ((typeof module != 'undefined') && (module.exports)) { // Node Module
  module.exports = config;
  } else if (typeof window != 'undefined') { // Fall back to attaching to window
  window.SiteConfig = config;
  };
}).call(this);
