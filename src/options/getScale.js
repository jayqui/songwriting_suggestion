export const NOTE_NAMES = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
const INCLUDE_SHARPS = ['G', 'D', 'A', 'E', 'B'];
// const INCLUDE_FLATS = ['F', 'Bb', 'Eb', 'Ab', 'Db',]
const FLAT_TO_SHARP_TRANSLATION = {
  Bb: 'A#',
  Db: 'C#',
  Eb: 'D#',
  Gb: 'F#',
  Ab: 'G#',
};
const NOTES = {
  'A': 0,
  'A#': 1,
  'Bb': 1,
  'B': 2,
  'C': 3,
  'C#': 4,
  'Db': 4,
  'D': 5,
  'D#': 6,
  'Eb': 6,
  'E': 7,
  'F': 8,
  'F#': 9,
  'Gb': 9,
  'G': 10,
  'G#': 11,
  'Ab': 11,
}
const NUMBER_OF_NOTES_IN_WESTERN_SCALE = 12;
const MODES = {
  // 1: half step, 2: whole step
  'ionian':     [2, 2, 1, 2, 2, 2, 1], // example of C: C D E F G A B C
  'dorian':     [2, 1, 2, 2, 2, 1, 2], // example of D: D E F G A B C D
  'phrygian':   [1, 2, 2, 2, 1, 2, 2], // example of E: E F G A B C D E
  'lydian':     [2, 2, 2, 1, 2, 2, 1], // example of F: F G A B C D E F
  'mixolydian': [2, 2, 1, 2, 2, 1, 2], // example of G: G A B C D E F G
  'aeolian':    [2, 1, 2, 2, 1, 2, 2], // example of A: A B C D E F G A
  'locrian':    [1, 2, 2, 1, 2, 2, 2], // example of B: B C D E F G A B

  'major':      [2, 2, 1, 2, 2, 2, 1], // example of C: C D E F G A B C
  'minor':      [2, 1, 2, 2, 1, 2, 2], // example of A: A B C D E F G A
};

export default function getScale(scaleRootNote, mode) {
  if (!Object.keys(MODES).includes(mode.toLowerCase())) {
    throw new Error(`'${mode}' is not a supported mode`);
  }

  const accum = [];
  const indexOfscaleRootNote = NOTES[scaleRootNote];
  let counter = indexOfscaleRootNote;

  MODES[mode.toLowerCase()].forEach((intervalLength) => {
    let noteToInclude = NOTE_NAMES[counter % NOTE_NAMES.length];
    const shouldDisplayNoteAsSharp = INCLUDE_SHARPS.includes(scaleRootNote) &&
      Object.keys(FLAT_TO_SHARP_TRANSLATION).includes(noteToInclude);

    if (shouldDisplayNoteAsSharp) {
      noteToInclude = FLAT_TO_SHARP_TRANSLATION[noteToInclude];
    }
    accum.push(noteToInclude);
    counter += intervalLength;
  });

  return accum;
}
