import { expect } from 'chai'
import getScale from '../src/options/getScale';

describe('#getScale', () => {
  describe('returns the correct scale for the specified mode', () => {
    it('returns the correct scale for the ionian (major) mode', () => {
      expect(getScale('C', 'major')).to.deep.eq(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
      expect(getScale('C', 'ionian')).to.deep.eq(['C', 'D', 'E', 'F', 'G', 'A', 'B']);
      expect(getScale('F', 'major')).to.deep.eq(['F', 'G', 'A', 'Bb', 'C', 'D', 'E']);
      expect(getScale('G', 'major')).to.deep.eq(['G', 'A', 'B', 'C', 'D', 'E', 'F#']);
    });

    it('returns the correct scale for the dorian mode', () => {
      expect(getScale('D', 'dorian')).to.deep.eq(['D', 'E', 'F', 'G', 'A', 'B', 'C']);
      expect(getScale('G', 'dorian')).to.deep.eq(['G', 'A', 'Bb', 'C', 'D', 'E', 'F']);
      expect(getScale('A', 'dorian')).to.deep.eq(['A', 'B', 'C', 'D', 'E', 'F#', 'G']);
    });

    it('returns the correct scale for the phrygian mode', () => {
      expect(getScale('E', 'phrygian')).to.deep.eq(['E', 'F', 'G', 'A', 'B', 'C', 'D']);
      expect(getScale('A', 'phrygian')).to.deep.eq(['A', 'Bb', 'C', 'D', 'E', 'F', 'G']);
      expect(getScale('B', 'phrygian')).to.deep.eq(['B', 'C', 'D', 'E', 'F#', 'G', 'A']);
    });

    it('returns the correct scale for the lydian mode', () => {
      expect(getScale('F', 'lydian')).to.deep.eq(['F', 'G', 'A', 'B', 'C', 'D', 'E']);
      expect(getScale('Bb', 'lydian')).to.deep.eq(['Bb', 'C', 'D', 'E', 'F', 'G', 'A']);
      expect(getScale('C', 'lydian')).to.deep.eq(['C', 'D', 'E', 'F#', 'G', 'A', 'B']);
    });

    it('returns the correct scale for the mixolydian mode', () => {
      expect(getScale('G', 'mixolydian')).to.deep.eq(['G', 'A', 'B', 'C', 'D', 'E', 'F']);
      expect(getScale('C', 'mixolydian')).to.deep.eq(['C', 'D', 'E', 'F', 'G', 'A', 'Bb']);
      expect(getScale('D', 'mixolydian')).to.deep.eq(['D', 'E', 'F#', 'G', 'A', 'B', 'C']);
    });

    it('returns the correct scale for the aeolian (minor) mode', () => {
      expect(getScale('A', 'minor')).to.deep.eq(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
      expect(getScale('D', 'minor')).to.deep.eq(['D', 'E', 'F', 'G', 'A', 'Bb', 'C']);
      expect(getScale('E', 'minor')).to.deep.eq(['E', 'F#', 'G', 'A', 'B', 'C', 'D']);
    });

    it('returns the correct scale for the locrian mode', () => {
      expect(getScale('B', 'locrian')).to.deep.eq(['B', 'C', 'D', 'E', 'F', 'G', 'A']);
      expect(getScale('E', 'locrian')).to.deep.eq(['E', 'F', 'G', 'A', 'Bb', 'C', 'D']);
      expect(getScale('F#', 'locrian')).to.deep.eq(['F#', 'G', 'A', 'B', 'C', 'D', 'E']);
    });
  });
});

