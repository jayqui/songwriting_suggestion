'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ALL_OPTIONS, _NON_NOTE_CONTINUE_OP;

exports.default = randomRhythm;

var _selectWeighted = require('../utils/selectWeighted');

var _selectWeighted2 = _interopRequireDefault(_selectWeighted);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NOTE_START = '*';
var NOTE_CONTINUE = '=';
var MUSICAL_REST = '_';
var ALL_OPTIONS = (_ALL_OPTIONS = {}, _defineProperty(_ALL_OPTIONS, NOTE_START, 25), _defineProperty(_ALL_OPTIONS, NOTE_CONTINUE, 50), _defineProperty(_ALL_OPTIONS, MUSICAL_REST, 25), _ALL_OPTIONS);
var NON_MUSICAL_REST_OPTIONS = [NOTE_START, NOTE_CONTINUE];
var NON_NOTE_CONTINUE_OPTIONS = (_NON_NOTE_CONTINUE_OP = {}, _defineProperty(_NON_NOTE_CONTINUE_OP, NOTE_START, 67), _defineProperty(_NON_NOTE_CONTINUE_OP, MUSICAL_REST, 33), _NON_NOTE_CONTINUE_OP);

function randomRhythm(beatsPerMeasure) {
  var accum = [];
  var sixteenthsPerMeasure = beatsPerMeasure * 4;

  for (var i = 0; i < sixteenthsPerMeasure; i++) {
    var previousSubBeat = accum[accum.length - 1];
    var previousSubBeatExistedAndWasNotARest = NON_MUSICAL_REST_OPTIONS.includes(previousSubBeat);

    if (previousSubBeatExistedAndWasNotARest) {
      accum.push((0, _selectWeighted2.default)(ALL_OPTIONS));
    } else {
      accum.push((0, _selectWeighted2.default)(NON_NOTE_CONTINUE_OPTIONS));
    }
  }

  return accum;
}