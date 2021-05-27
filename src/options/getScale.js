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

export default function getScale(scaleRootNote, mode) {
  const accum = []
  const indexOfscaleRootNote = NOTE_NAMES.indexOf(scaleRootNote);
  let counter = indexOfscaleRootNote;

  MODES[mode.toLowerCase()].forEach((intervalLength) => {
    let noteToInclude = NOTE_NAMES[counter % NOTE_NAMES.length];
    const shouldDisplayNoteAsSharp = INCLUDE_SHARPS.includes(scaleRootNote) &&
      Object.keys(FLAT_TO_SHARP_TRANSLATION).includes(noteToInclude)

    if (shouldDisplayNoteAsSharp) {
      noteToInclude = FLAT_TO_SHARP_TRANSLATION[noteToInclude];
    }
    accum.push(noteToInclude);
    counter += intervalLength;
  });

  return accum;
}
