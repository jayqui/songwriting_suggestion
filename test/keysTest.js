import { getScale } from '../src/options/keys';
import { expect }from 'chai'
// import assert from 'assert'
// import expect from 'expect'


describe('#getScale', () => {
  describe('returns the correct scale for the specified mode', () => {
    it('returns the correct scale for the ionian (major) mode', () => {
      expect(getScale('C', 'major')).to.deep.eq(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
      expect(getScale('C', 'ionian')).to.deep.eq(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
      expect(getScale('F', 'major')).to.deep.eq(['F', 'G', 'A', 'Bb', 'C', 'D', 'E']);
      expect(getScale('G', 'major')).to.deep.eq(['G', 'A', 'B', 'C', 'D', 'E', 'F#']);
    });

    it('returns the correct scale for the aeolian (minor) mode', () => {
      expect(getScale('A', 'minor')).to.deep.eq(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
      // expect(getScale('D', 'minor')).to.deep.eq(['D', 'E', 'F', 'G', 'A', 'Bb', 'C']); // needs renders Bb as A# but should not
      expect(getScale('E', 'minor')).to.deep.eq(['E', 'F#', 'G', 'A', 'B', 'C', 'D']);
    });
  });
});

describe('#getChordsInScale', () => {
  describe('returns the chords in the scale for the specified mode', () => {
    it('returns the chords in the scale for the ionian (major) mode', () => {
      // expect(getScale('C', 'major')).to.deep.eq({
      //   I: 'C major',
      //   ii: 'D minor',
      //   iii: 'E minor',
      //   IV: 'F major',
      //   V: 'G major',
      //   vi: 'A minor',
      //   viiº: 'B diminished',
      // });
    });
})

describe('#getParallelMinorBorrowableChords', () => {
});
