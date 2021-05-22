import sample from './utils/sample'
import selectWeighted from './utils/selectWeighted'

import emotions from './options/emotions'
import persons from'./options/persons'
import genders from'./options/genders'
import verbTenses from './options/verbTenses'
import timeSignatures from './options/timeSignatures'

// unweighted options
const emotion = sample(emotions);
const person = sample(persons);
const verbTense = sample(verbTenses);

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
  }
}

console.log(run());
