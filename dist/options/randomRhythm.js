'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = randomRhythm;

var _sample = require('../utils/sample');

var _sample2 = _interopRequireDefault(_sample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOTE_START = '*';
var NOTE_CONTINUE = '=';
var MUSICAL_REST = '_';
var ALL_OPTIONS = [NOTE_START, NOTE_CONTINUE, MUSICAL_REST];
var NON_MUSICAL_REST_OPTIONS = [NOTE_START, NOTE_CONTINUE];
var NON_NOTE_CONTINUE_OPTIONS = [NOTE_START, MUSICAL_REST];

function randomRhythm(beatsPerMeasure) {
  var accum = [];
  var sixteenthsPerMeasure = beatsPerMeasure * 4;

  for (var i = 0; i < sixteenthsPerMeasure; i++) {
    var previousSubBeat = accum[accum.length - 1];
    var previousSubBeatExistedAndWasNotARest = NON_MUSICAL_REST_OPTIONS.includes(previousSubBeat);

    if (previousSubBeatExistedAndWasNotARest) {
      accum.push((0, _sample2.default)(ALL_OPTIONS));
    } else {
      accum.push((0, _sample2.default)(NON_NOTE_CONTINUE_OPTIONS));
    }
  }

  return accum;
}