'use strict';

var _tempos = require('./tempos');

var _tempos2 = _interopRequireDefault(_tempos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function tempo() {
  return sample(_tempos2.default);
}

function run() {
  return {
    tempo: tempo()
  };
}

console.log(run());