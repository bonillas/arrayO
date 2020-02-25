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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var arrayO = (function() {
  var arrayO = {};

  arrayO.mapObject = function(object, fn) {
    var obj = Object.assign({}, object);

    for (var key in obj) {
      obj[key] = fn(obj[key]);
    }

    return obj;
  };

  arrayO.filterObject = function(object, fn) {
    var arr = Object.keys(object).filter(function(key) {
      return fn(object[key]);
    });
    arr = arr.map(function(key) {
      return _defineProperty({}, key, object[key]);
    });
    return Object.assign.apply(Object, [{}].concat(_toConsumableArray(arr)));
  };

  arrayO.sortObject = function(object, fn) {
    var arr = Object.keys(object).sort(function(a, b) {
      return fn(object[a], object[b]);
    });
    arr = arr.map(function(key) {
      return _defineProperty({}, key, object[key]);
    });
    return Object.assign.apply(Object, [{}].concat(_toConsumableArray(arr)));
  };

  arrayO.reduceObject = function(object, fn, initialValue, keys) {
    var arr = !keys ? Object.values(object) : Object.keys(object);
    return initialValue ? arr.reduce(fn, initialValue) : arr.reduce(fn);
  };

  return arrayO;
})();