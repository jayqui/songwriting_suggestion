import CHORDS_PER_MODE from '../utils/chordsPerMode';
import getScale from './getScale';

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
