'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = randomMelody;

var _randomRhythm = require('./randomRhythm');

var _randomRhythm2 = _interopRequireDefault(_randomRhythm);

var _keys = require('./keys');

var _sample = require('../utils/sample');

var _sample2 = _interopRequireDefault(_sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function randomMelody(_ref) {
  var scaleRootNote = _ref.scaleRootNote,
      mode = _ref.mode,
      beatsPerMeasure = _ref.beatsPerMeasure;

  var rhythm = (0, _randomRhythm2.default)(beatsPerMeasure);
  var melody = [];

  rhythm.forEach(function (subBeat) {
    if (subBeat === '*') {
      var randomNote = (0, _sample2.default)((0, _keys.getScale)(scaleRootNote, mode));
      melody.push(randomNote);
    } else {
      melody.push(subBeat);
    }
  });

  return melody;
}