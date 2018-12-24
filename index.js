(function() {
  var crypto = require('crypto');
  var got = require('got');

  function handler(event, context) {
    got('www.google.com').then((res) => {
      return context.succeed(JSON.stringify(res.body));
    }).catch((err) => {
      return context.fail(JSON.stringify(err.message));
    });
  }


  exports.handler = handler;
})();

