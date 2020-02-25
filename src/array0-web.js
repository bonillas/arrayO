"use strict";

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (
    Symbol.iterator in Object(iter) ||
    Object.prototype.toString.call(iter) === "[object Arguments]"
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
}

var arrayO = (function() {
  var arrayO = {};

  arrayO.mapObject = function(object, fn, keys) {
    var arr = Object.entries(object);
    arr = arr.map(function(n, i) {
      if (keys) {
        n[0] = fn(n[0], i);
      } else {
        n[1] = fn(n[1], i);
      }

      return n;
    });
    var objArr = arr.map(function(n) {
      var ret = {};
      ret[n[0]] = n[1];
      return ret;
    });
    return Object.assign.apply(Object, [{}].concat(_toConsumableArray(objArr)));
  };

  arrayO.filterObject = function(object, fn, keys) {
    var arr = Object.entries(object);
    arr = arr.filter(function(n, i) {
      return keys ? fn(n[0], i) : fn(n[1], i);
    });
    var objArr = arr.map(function(n) {
      var ret = {};
      ret[n[0]] = n[1];
      return ret;
    });
    return Object.assign.apply(Object, [{}].concat(_toConsumableArray(objArr)));
  };

  arrayO.sortObject = function(object, fn, keys) {
    var arr = Object.entries(object);
    arr.sort(function(a, b) {
      return keys ? fn(a[0], b[0]) : fn(a[1], b[1]);
    });
    var objArr = arr.map(function(n) {
      var ret = {};
      ret[n[0]] = n[1];
      return ret;
    });
    return Object.assign.apply(Object, [{}].concat(_toConsumableArray(objArr)));
  };

  arrayO.reduceObject = function(object, fn, initialValue, keys) {
    var arr = !keys ? Object.values(object) : Object.keys(object);
    return initialValue ? arr.reduce(fn, initialValue) : arr.reduce(fn);
  };

  return arrayO;
})();