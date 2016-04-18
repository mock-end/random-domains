'use strict';

var clamp       = require('clamp');
var toString    = require('to-str');
var toLength    = require('to-length');
var randomTld   = require('random-tld');
var randomLorem = require('random-lorem');


module.exports = function (level, tld) {

  var length = arguments.length;

  if (length === 0) {
    level = 1;
    tld   = randomTld();
  } else if (length === 1) {
    if (typeof level === 'number') {
      tld = randomTld();
    } else {
      tld   = toString(level);
      level = 1;
    }
  } else {
    level = toLength(level);
    tld   = toString(tld) || randomTld();
  }

  level = clamp(level, 1, 10);

  var parts = [];

  while (level--) {
    parts.push(randomLorem());
  }

  parts.push(tld);

  return parts.join('.');
};
