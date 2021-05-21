import sample from './utils/sample'
import selectWeighted from './utils/selectWeighted'

import emotions from './options/emotions'
import timeSignatures from './options/timeSignatures'

const emotion = sample(emotions);
const timeSignature = selectWeighted(timeSignatures);

function run() {
  return {
    emotion,
    timeSignature,
  }
}

console.log(run());
