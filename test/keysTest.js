import { getScale, getChordsInScale, getParallelKeyBorrowableChords } from '../src/options/keys';
import { expect } from 'chai'

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
      expect(getChordsInScale('C', 'major')).to.deep.eq({
        I: 'C major (7)',
        ii: 'D minor (7)',
        iii: 'E minor (7)',
        IV: 'F major (7)',
        V: 'G major (dominant 7)',
        vi: 'A minor (7)',
        viiº: 'B diminished (half 7)',
      });
    });

    it('returns the chords in the scale for the aeolian (minor) mode', () => {
      expect(getChordsInScale('A', 'minor')).to.deep.eq({
        i: 'A minor (7)',
        iiº: 'B diminished (half 7)',
        III: 'C major (7)',
        iv: 'D minor (7)',
        v: 'E minor (7)',
        VI: 'F major (7)',
        VII: 'G major (dominant 7)',
      });
    });
  });
});

describe('#getParallelKeyBorrowableChords', () => {
  describe('returns the chords in the parallel key for the specified mode', () => {
    it('returns the chords in the C minor scale when given C major', () => {
      expect(getParallelKeyBorrowableChords('C', 'major')).to.deep.eq({
        i: 'C minor (7)',
        iiº: 'D diminished (half 7)',
        III: 'Eb major (7)',
        iv: 'F minor (7)',
        v: 'G minor (7)',
        VI: 'Ab major (7)',
        VII: 'Bb major (dominant 7)',
      });
    });
  });
});
