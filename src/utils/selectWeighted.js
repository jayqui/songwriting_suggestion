import sample from './sample';

function times(thing, howManyTimes) {
  let accum = [];
  for (let i = 0; i < howManyTimes; i++) {
    accum.push(thing);
  }
  return accum;
}

export default function selectWeighted(obj) {
  const arrayToSampleFrom = Object.keys(obj).reduce((accum, key) => {
    return accum.concat(times(key, obj[key]));
  }, []);
  return sample(arrayToSampleFrom);
}
