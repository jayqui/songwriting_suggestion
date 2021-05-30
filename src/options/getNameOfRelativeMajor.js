import { NOTE_NAMES, NOTES } from './getScale';

export default function getNameOfRelativeMajor(scaleRootNote, mode) {
  const HALF_STEPS_TO_GO_UP = {
    ionian: 0,
    major: 0,
    dorian: 10,
    phrygian: 8,
    lydian: 7,
    mixolydian: 5,
    aeolian: 3,
    minor: 3,
    locrian: 1,
  }
  const indexOfScaleRootNote = NOTES[scaleRootNote];
  const goUpBy = HALF_STEPS_TO_GO_UP[mode];
  const rootNameOfRelativeMajor = NOTE_NAMES[(indexOfScaleRootNote + goUpBy) % NOTE_NAMES.length]

  return [rootNameOfRelativeMajor, 'major'];
}
