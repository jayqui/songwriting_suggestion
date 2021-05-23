'use strict';

var _sample = require('./utils/sample');

var _sample2 = _interopRequireDefault(_sample);

var _selectWeighted = require('./utils/selectWeighted');

var _selectWeighted2 = _interopRequireDefault(_selectWeighted);

var _emotions = require('./options/emotions');

var _emotions2 = _interopRequireDefault(_emotions);

var _persons = require('./options/persons');

var _persons2 = _interopRequireDefault(_persons);

var _genders = require('./options/genders');

var _genders2 = _interopRequireDefault(_genders);

var _modes = require('./options/modes');

var _modes2 = _interopRequireDefault(_modes);

var _verbTenses = require('./options/verbTenses');

var _verbTenses2 = _interopRequireDefault(_verbTenses);

var _timeSignatures = require('./options/timeSignatures');

var _timeSignatures2 = _interopRequireDefault(_timeSignatures);

var _keys = require('./options/keys');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// unweighted options
var emotion = (0, _sample2.default)(_emotions2.default);
var person = (0, _sample2.default)(_persons2.default);
var verbTense = (0, _sample2.default)(_verbTenses2.default);
var scaleRootNote = (0, _sample2.default)(_keys.NOTE_NAMES);
var mode = (0, _sample2.default)(_modes2.default);

// weighted options
var timeSignature = (0, _selectWeighted2.default)(_timeSignatures2.default);
var gender = (0, _selectWeighted2.default)(_genders2.default);

function run() {
  return {
    emotion: emotion,
    timeSignature: timeSignature,
    person: person,
    gender: gender,
    verbTense: verbTense,
    key: scaleRootNote + ' ' + mode,
    scale: (0, _keys.getScale)(scaleRootNote, mode),
    chordsInScale: (0, _keys.getChordsInScale)(scaleRootNote, mode),
    parallelKeyBorrowableChords: (0, _keys.getParallelKeyBorrowableChords)(scaleRootNote, mode)
  };
}

console.log(run());