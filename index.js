'use strict';

var clamp       = require('clamp');
var toLength    = require('to-length');
var randomTld   = require('random-tld');
var randomLorem = require('random-lorem');


module.exports = function (level) {

  if (typeof level === 'undefined') {
    level = 1;
  } else {
    level = toLength(level);
  }

  level = clamp(level, 1, 10);

  var parts = [];

  while (level--) {
    parts.push(randomLorem());
  }

  parts.push(randomTld());

  return parts.join('.');
};
