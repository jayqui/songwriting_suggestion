'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScale = getScale;
exports.getChordsInScale = getChordsInScale;
exports.getParallelKeyBorrowableChords = getParallelKeyBorrowableChords;
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

var CHORDS_PER_MODE = {
  'major': function major(scale) {
    return {
      I: scale[0] + ' major',
      ii: scale[1] + ' minor',
      iii: scale[2] + ' minor',
      IV: scale[3] + ' major',
      V: scale[4] + ' major',
      vi: scale[5] + ' minor',
      viiº: scale[6] + ' diminished'
    };
  },
  'ionian': function ionian(scale) {
    return {
      I: scale[0] + ' major',
      ii: scale[1] + ' minor',
      iii: scale[2] + ' minor',
      IV: scale[3] + ' major',
      V: scale[4] + ' major',
      vi: scale[5] + ' minor',
      viiº: scale[6] + ' diminished'
    };
  },
  'aeolian': function aeolian(scale) {
    return {
      i: scale[0] + ' minor',
      iiº: scale[1] + ' diminished',
      III: scale[2] + ' major',
      IV: scale[3] + ' major',
      V: scale[4] + ' major',
      vi: scale[5] + ' minor',
      viiº: scale[6] + ' diminished'
    };
  },
  'minor': function minor(scale) {
    return {
      i: scale[0] + ' minor',
      iiº: scale[1] + ' diminished',
      III: scale[2] + ' major',
      iv: scale[3] + ' minor',
      v: scale[4] + ' minor',
      VI: scale[5] + ' major',
      VII: scale[6] + ' major'
    };
  }
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
  return CHORDS_PER_MODE[mode](scale);
}

function getParallelKeyBorrowableChords(scaleNoteName, mode) {
  if (!['minor', 'major'].includes(mode.toLowerCase())) {
    throw new Error('Not supported unless mode is major or minor');
  }

  var parallelMode = mode.toLowerCase() === 'minor' ? 'major' : 'minor';
  return getChordsInScale(scaleNoteName, parallelMode);
}