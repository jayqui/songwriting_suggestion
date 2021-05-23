'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOTE_NAMES = undefined;
exports.getScale = getScale;
exports.getChordsInScale = getChordsInScale;
exports.getParallelKeyBorrowableChords = getParallelKeyBorrowableChords;

var _chordsPerMode = require('../utils/chordsPerMode');

var _chordsPerMode2 = _interopRequireDefault(_chordsPerMode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NOTE_NAMES = exports.NOTE_NAMES = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
var INCLUDE_SHARPS = ['G', 'D', 'A', 'E', 'B'];
// const INCLUDE_FLATS = ['F', 'Bb', 'Eb', 'Ab', 'Db',]
var FLAT_TO_SHARP_TRANSLATION = {
  Bb: 'A#',
  Db: 'C#',
  Eb: 'D#',
  Gb: 'F#',
  Ab: 'G#'
};
var MODES = {
  // 1: half step, 2: whole step
  'major': [2, 2, 1, 2, 2, 2, 1], // example of C: C D E F G A B
  'ionian': [2, 2, 1, 2, 2, 2, 1], // example of C: C D E F G A B
  'minor': [2, 1, 2, 2, 1, 2, 2], // example of A: A B C D E F G
  'aeolian': [2, 1, 2, 2, 1, 2, 2] // example of A: A B C D E F G
};

function getScale(scaleNoteName, mode) {
  var accum = [];
  var indexOfScaleNoteName = NOTE_NAMES.indexOf(scaleNoteName);
  var counter = indexOfScaleNoteName;

  MODES[mode.toLowerCase()].forEach(function (intervalLength) {
    var noteToInclude = NOTE_NAMES[counter % NOTE_NAMES.length];
    var shouldDisplayNoteAsSharp = INCLUDE_SHARPS.includes(scaleNoteName) && Object.keys(FLAT_TO_SHARP_TRANSLATION).includes(noteToInclude);
    if (shouldDisplayNoteAsSharp) {
      noteToInclude = FLAT_TO_SHARP_TRANSLATION[noteToInclude];
    }
    accum.push(noteToInclude);
    counter += intervalLength;
  });

  return accum;
}

function getChordsInScale(scaleNoteName, mode) {
  var scale = getScale(scaleNoteName, mode);
  return _chordsPerMode2.default[mode](scale);
}

function getParallelKeyBorrowableChords(scaleNoteName, mode) {
  if (!['minor', 'major'].includes(mode.toLowerCase())) {
    throw new Error('Not supported unless mode is major or minor');
  }

  var parallelMode = mode.toLowerCase() === 'minor' ? 'major' : 'minor';
  return getChordsInScale(scaleNoteName, parallelMode);
}