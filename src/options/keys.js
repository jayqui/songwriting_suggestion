export const NOTE_NAMES = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
const INCLUDE_SHARPS = ['G', 'D', 'A', 'E', 'B']
// const INCLUDE_FLATS = ['F', 'Bb', 'Eb', 'Ab', 'Db',]
const FLAT_TO_SHARP_TRANSLATION = {
  Bb: 'A#',
  Db: 'C#',
  Eb: 'D#',
  Gb: 'F#',
  Ab: 'G#',
}
const MODES = {
  // 1: half step, 2: whole step
  'major':   [2, 2, 1, 2, 2, 2, 1], // example of C: C D E F G A B
  'ionian':  [2, 2, 1, 2, 2, 2, 1], // example of C: C D E F G A B
  'minor':   [2, 1, 2, 2, 1, 2, 2], // example of A: A B C D E F G
  'aeolian': [2, 1, 2, 2, 1, 2, 2], // example of A: A B C D E F G
}

const CHORDS_PER_MODE = {
  'major': (scale) => ({
    I: `${scale[0]} major`,
    ii: `${scale[1]} minor`,
    iii: `${scale[2]} minor`,
    IV: `${scale[3]} major`,
    V: `${scale[4]} major`,
    vi: `${scale[5]} minor`,
    viiº: `${scale[6]} diminished`,
  }),
  'ionian': (scale) => ({
    I: `${scale[0]} major`,
    ii: `${scale[1]} minor`,
    iii: `${scale[2]} minor`,
    IV: `${scale[3]} major`,
    V: `${scale[4]} major`,
    vi: `${scale[5]} minor`,
    viiº: `${scale[6]} diminished`,
  }),
  'aeolian': (scale) => ({
    i: `${scale[0]} minor`,
    iiº: `${scale[1]} diminished`,
    III: `${scale[2]} major`,
    IV: `${scale[3]} major`,
    V: `${scale[4]} major`,
    vi: `${scale[5]} minor`,
    viiº: `${scale[6]} diminished`,
  }),
  'minor': (scale) => ({
    i: `${scale[0]} minor`,
    iiº: `${scale[1]} diminished`,
    III: `${scale[2]} major`,
    iv: `${scale[3]} minor`,
    v: `${scale[4]} minor`,
    VI: `${scale[5]} major`,
    VII: `${scale[6]} major`,
  }),
}

export function getScale(scaleNoteName, mode) {
  const accum = []
  const indexOfScaleNoteName = NOTE_NAMES.indexOf(scaleNoteName);
  let counter = indexOfScaleNoteName;

  MODES[mode.toLowerCase()].forEach((intervalLength) => {
    let noteToInclude = NOTE_NAMES[counter % NOTE_NAMES.length];
    const shouldDisplayNoteAsSharp = INCLUDE_SHARPS.includes(scaleNoteName) &&
      Object.keys(FLAT_TO_SHARP_TRANSLATION).includes(noteToInclude)
    if (shouldDisplayNoteAsSharp) {
      noteToInclude = FLAT_TO_SHARP_TRANSLATION[noteToInclude];
    }
    accum.push(noteToInclude);
    counter += intervalLength;
  });

  return accum;
}

export function getChordsInScale(scaleNoteName, mode) {
  const scale = getScale(scaleNoteName, mode);
  return CHORDS_PER_MODE[mode](scale);
}

export function getParallelKeyBorrowableChords(scaleNoteName, mode) {
  if (!['minor', 'major'].includes(mode.toLowerCase())) {
    throw new Error('Not supported unless mode is major or minor');
  }

  const parallelMode = mode.toLowerCase() === 'minor' ? 'major' : 'minor';
  return getChordsInScale(scaleNoteName, parallelMode);
}
