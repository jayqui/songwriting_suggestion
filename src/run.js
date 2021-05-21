import sample from './utils/sample'
import selectWeighted from './utils/selectWeighted'

import emotions from './options/emotions'
import verbTenses from './options/verbTenses'
import timeSignatures from './options/timeSignatures'

// unweighted options
const emotion = sample(emotions);
const verbTense = sample(verbTenses);

// weighted options
const timeSignature = selectWeighted(timeSignatures);

function run() {
  return {
    emotion,
    timeSignature,
    verbTense,
  }
}

console.log(run());
