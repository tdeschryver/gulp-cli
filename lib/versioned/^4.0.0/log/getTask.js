'use strict';

var isFunction = require('lodash.isfunction');

var isString = require('../../../shared/is-string');
var isObject = require('../../../shared/is-plain-object');

function getTask(gulpInst) {
  return function(name) {
    var task = gulpInst.task(name);
    return {
      description: getDescription(task),
      flags: getFlags(task),
    };
  };
}

function getDescription(task) {
  if (isString(task.description)) {
    return task.description;
  }
  if (isFunction(task.unwrap)) {
    var origFn = task.unwrap();
    if (isString(origFn.description)) {
      return origFn.description;
    }
  }
  return undefined;
}

function getFlags(task) {
  if (isObject(task.flags)) {
    return task.flags;
  }
  if (isFunction(task.unwrap)) {
    var origFn = task.unwrap();
    if (isObject(origFn.flags)) {
      return origFn.flags;
    }
  }
  return undefined;
}

module.exports = getTask;
