import randomRhythm from './randomRhythm';
import getScale from './getScale';
import sample from '../utils/sample';

export default function randomMelody({ scaleRootNote, mode, beatsPerMeasure }) {
  const rhythm = randomRhythm(beatsPerMeasure);
  const melody = [];

  rhythm.forEach((subBeat) => {
    if (subBeat === '*') {
      const randomNote = sample(getScale(scaleRootNote, mode));
      melody.push(randomNote);
    } else {
      melody.push(subBeat);
    }
  });

  return melody;
}
