var generator = require('./../lib/generator');
var Joi = require('joi');

module.exports = [{
  method: 'GET',
  path: '/v1',
  config: {
    handler: function (request, reply) {
      opts = {};
      generator.example(opts, function (err, r) {
        if (err) {
          reply(err);
        } else {
          reply(r);
        }
      })
    },
    tags: ['api']
  }
}];
