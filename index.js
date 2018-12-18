(function() {
  var crypto = require('crypto');
  var got = require('got');

  function handler(event, context) {
    got('www.google.com').then((res) => {
      return context.succeed(res);
    }).catch((err) => {
      return context.fail(err);
    });
  }


  exports.handler = handler;
})();
