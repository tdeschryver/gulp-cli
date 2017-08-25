'use strict';

var isObject = require('./is-object');

function isPlainObject(val) {
  return isObject(val) && val.constructor === Object;
}

module.exports = isPlainObject;
