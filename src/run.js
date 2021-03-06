import sample from './utils/sample';
import selectWeighted from './utils/selectWeighted';

import emotions from './options/emotions';
import persons from'./options/persons';
import genders from'./options/genders';
import modes from'./options/modes';
import verbTenses from './options/verbTenses';

import beatsPerMeasureCandidates from './options/beatsPerMeasureCandidates';
import getRandomInt from './utils/getRandomInt';

import getScale, { NOTE_NAMES as scaleRootNotes } from './options/getScale';
import getChordsInScale from './options/getChordsInScale';
import getParallelKeyBorrowableChords from './options/getParallelKeyBorrowableChords';

import randomRhythm from './options/randomRhythm';
import randomMelody from './options/randomMelody';

// unweighted options
const emotion = sample(emotions);
const person = sample(persons);
const verbTense = sample(verbTenses);
const scaleRootNote = sample(scaleRootNotes);

// weighted options
const beatsPerMeasure = selectWeighted(beatsPerMeasureCandidates);
const gender = selectWeighted(genders);
const mode = selectWeighted(modes);

function run() {
  return {
    emotion,
    beatsPerMeasure,
    beatsPerMinute: getRandomInt(60, 181),
    person,
    gender,
    verbTense,
    key: `${scaleRootNote} ${mode}`,
    scale: getScale(scaleRootNote, mode),
    chordsInScale: getChordsInScale(scaleRootNote, mode),
    parallelKeyBorrowableChords: getParallelKeyBorrowableChords(scaleRootNote, mode),
    randomRhythm: randomRhythm(beatsPerMeasure),
    randomMelody: randomMelody({ scaleRootNote, mode, beatsPerMeasure }),
  };
}

console.log(run());
