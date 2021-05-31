import { expect } from 'chai'
import parallelMajorBorrowableChords from '../src/options/getParallelKeyBorrowableChords';

describe.only('#parallelMajorBorrowableChords', () => {
  describe('returns the chords in the parallel key for the specified mode', () => {
    describe('when given a major key', () => {
      it('returns the chords in the minor scale with the same root', () => {
        expect(parallelMajorBorrowableChords('C', 'major')).to.deep.eq({
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

    describe('when given a major key', () => {
      it('returns the chords in the minor scale with the same root', () => {
      });
    });
  });
});
