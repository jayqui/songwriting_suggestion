import selectWeighted from '../utils/selectWeighted';

const NOTE_START = '*';
const NOTE_CONTINUE = '=';
const MUSICAL_REST = '_';
const ALL_OPTIONS = {
  [NOTE_START]: 25,
  [NOTE_CONTINUE]: 50,
  [MUSICAL_REST]: 25,
};
const NON_MUSICAL_REST_OPTIONS = [NOTE_START, NOTE_CONTINUE];
const NON_NOTE_CONTINUE_OPTIONS = {
  [NOTE_START]: 67,
  [MUSICAL_REST]: 33,
};

export default function randomRhythm(beatsPerMeasure) {
  const accum = [];
  const sixteenthsPerMeasure = beatsPerMeasure * 4;

  for (let i = 0; i < sixteenthsPerMeasure; i++) {
    const previousSubBeat = accum[accum.length - 1];
    const previousSubBeatExistedAndWasNotARest = NON_MUSICAL_REST_OPTIONS.includes(previousSubBeat);

    if (previousSubBeatExistedAndWasNotARest) {
      accum.push(selectWeighted(ALL_OPTIONS));
    } else {
      accum.push(selectWeighted(NON_NOTE_CONTINUE_OPTIONS));
    }
  }

  return accum;
}
