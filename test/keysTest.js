import { expect } from 'chai'
import { getChordsInScale, getParallelKeyBorrowableChords } from '../src/options/keys';

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
