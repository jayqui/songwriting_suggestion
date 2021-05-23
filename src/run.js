import sample from './utils/sample'
import selectWeighted from './utils/selectWeighted'

import emotions from './options/emotions'
import persons from'./options/persons'
import genders from'./options/genders'
import modes from'./options/modes'
import verbTenses from './options/verbTenses'
import timeSignatures from './options/timeSignatures'
import { getScale, getChordsInScale, getParallelKeyBorrowableChords, NOTE_NAMES as scaleRootNotes } from './options/keys';

// unweighted options
const emotion = sample(emotions);
const person = sample(persons);
const verbTense = sample(verbTenses);
const scaleRootNote = sample(scaleRootNotes);
const mode = sample(modes);

// weighted options
const timeSignature = selectWeighted(timeSignatures);
const gender = selectWeighted(genders);

function run() {
  return {
    emotion,
    timeSignature,
    person,
    gender,
    verbTense,
    key: `${scaleRootNote} ${mode}`,
    scale: getScale(scaleRootNote, mode),
    chordsInScale: getChordsInScale(scaleRootNote, mode),
    parallelKeyBorrowableChords: getParallelKeyBorrowableChords(scaleRootNote, mode),
  }
}

console.log(run());
