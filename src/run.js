import tempos from './tempos'

function sample(items) {
  return items[Math.floor(Math.random() * items.length)]
}

function tempo() {
  return sample(tempos);
}

function run() {
  return {
    tempo: tempo(),
  }
}

console.log(run());
