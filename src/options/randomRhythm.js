import sample from '../utils/sample';

const NOTE_START = '*'
const NOTE_CONTINUE = '='
const MUSICAL_REST = '_'
const ALL_OPTIONS =  [NOTE_START, NOTE_CONTINUE, MUSICAL_REST];
const NON_MUSICAL_REST_OPTIONS = [NOTE_START, NOTE_CONTINUE];
const NON_NOTE_CONTINUE_OPTIONS = [NOTE_START, MUSICAL_REST];

export default function randomRhythm(beatsPerMeasure) {
  const accum = [];
  const sixteenthsPerMeasure = beatsPerMeasure * 4;

  for (let i = 0; i < sixteenthsPerMeasure; i++) {
    const previousSubBeat = accum[accum.length - 1];
    const previousSubBeatExistedAndWasNotARest = NON_MUSICAL_REST_OPTIONS.includes(previousSubBeat);

    if (previousSubBeatExistedAndWasNotARest) {
      accum.push(sample(ALL_OPTIONS));
    } else {
      accum.push(sample(NON_NOTE_CONTINUE_OPTIONS));
    }
  }

  return accum;
}
