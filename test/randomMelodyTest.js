import { expect } from 'chai'
import randomMelody from '../src/options/randomMelody';

describe("randomMelody", () => {
  describe("generating a random melody, given a key, a mode, and a measure length", () => {
    it("works for C major", () => {
      const scaleRootNote = 'C';
      const mode = 'ionian';
      const beatsPerMeasure = 4;
      expect(randomMelody({ scaleRootNote, mode, beatsPerMeasure }).join('')).to
        .match(/([ABCDEFG=_]{4}){4}/);
    });
  })
})
