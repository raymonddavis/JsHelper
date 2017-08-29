'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objects = require('./objects');

Object.keys(_objects).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _objects[key];
    }
  });
});