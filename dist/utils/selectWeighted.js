'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectWeighted;

var _sample = require('./sample');

var _sample2 = _interopRequireDefault(_sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function times(thing, howManyTimes) {
  var accum = [];
  for (var i = 0; i < howManyTimes; i++) {
    accum.push(thing);
  }
  return accum;
}

function selectWeighted(obj) {
  var arrayToSampleFrom = Object.keys(obj).reduce(function (accum, key) {
    return accum.concat(times(key, obj[key]));
  }, []);
  return (0, _sample2.default)(arrayToSampleFrom);
}