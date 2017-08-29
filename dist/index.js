'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Objects = require('./Objects');

var _Objects2 = _interopRequireDefault(_Objects);

var _Arrays = require('./Arrays');

var _Arrays2 = _interopRequireDefault(_Arrays);

var _Dates = require('./Dates');

var _Dates2 = _interopRequireDefault(_Dates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JsHelper = {
  Objects: _Objects2.default,
  Arrays: _Arrays2.default,
  Dates: _Dates2.default
};

/**
 * JsHelper imports everything
 */
exports.default = JsHelper;