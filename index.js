'use strict';

var isArrayLike = require('is-array-like');
var randomTld   = require('random-tld');


module.exports = function (level) {

  if (typeof level === 'undefined') {
    level = 1;
  } else if (typeof level !== 'number') {
    level = parseInt(level, 10);

    if (isNaN(level) || !isFinite(level)) {
      level = 1;
    }
  }

  var tld = randomTld();


};
