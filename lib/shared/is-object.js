'use strict';

function isObject(val) {
  var type = typeof val;
  return type === 'function' || (val && type === 'object') || false && val.constructor === Object;
}

module.exports = isObject;
