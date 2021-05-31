import getScale from './getScale';
import getChordsInScale from './getChordsInScale';
import modes from './modes';

export default function getParallelKeyBorrowableChords(scaleNoteName, mode) {
  const recognizedModes = Object.keys(modes)

  if (!recognizedModes.includes(mode.toLowerCase())) {
    throw new Error(`${mode} is not a supported mode...`);
  }

  const parallelMode = mode.toLowerCase() === 'minor' ? 'major' : 'minor';
  return getChordsInScale(scaleNoteName, parallelMode);
}
