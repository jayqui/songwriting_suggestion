import { expect } from 'chai'
import getNameOfRelativeMajor from '../src/options/getNameOfRelativeMajor';

describe('#getNameOfRelativeMajor', () => {
  describe('returns the correct scale for the specified mode', () => {
    it('returns the correct scale for the ionian (major) mode', () => {
      expect(getNameOfRelativeMajor('C', 'major')).to.deep.eq(['C', 'major']);
      expect(getNameOfRelativeMajor('C', 'ionian')).to.deep.eq(['C', 'major']);
      expect(getNameOfRelativeMajor('F', 'major')).to.deep.eq(['F', 'major']);
      expect(getNameOfRelativeMajor('G', 'major')).to.deep.eq(['G', 'major']);
    });

    it('returns the correct scale for the dorian mode', () => {
      expect(getNameOfRelativeMajor('D', 'dorian')).to.deep.eq(['C', 'major']);
      expect(getNameOfRelativeMajor('G', 'dorian')).to.deep.eq(['F', 'major']);
      expect(getNameOfRelativeMajor('A', 'dorian')).to.deep.eq(['G', 'major']);
      expect(getNameOfRelativeMajor('Eb', 'dorian')).to.deep.eq(['Db', 'major']);
      expect(getNameOfRelativeMajor('D#', 'dorian')).to.deep.eq(['Db', 'major']); // TODO: consult a circle of fifths / the interweb to discern which sharp keys should be coerced to their flat equivalents...
    });

    it('returns the correct scale for the phrygian mode', () => {
      expect(getNameOfRelativeMajor('E', 'phrygian')).to.deep.eq(['C', 'major']);
      expect(getNameOfRelativeMajor('A', 'phrygian')).to.deep.eq(['F', 'major']);
      expect(getNameOfRelativeMajor('B', 'phrygian')).to.deep.eq(['G', 'major']);
    });

    it('returns the correct scale for the lydian mode', () => {
      expect(getNameOfRelativeMajor('F', 'lydian')).to.deep.eq(['C', 'major']);
      expect(getNameOfRelativeMajor('Bb', 'lydian')).to.deep.eq(['F', 'major']);
      expect(getNameOfRelativeMajor('C', 'lydian')).to.deep.eq(['G', 'major']);
    });

    it('returns the correct scale for the mixolydian mode', () => {
      expect(getNameOfRelativeMajor('G', 'mixolydian')).to.deep.eq(['C', 'major']);
      expect(getNameOfRelativeMajor('C', 'mixolydian')).to.deep.eq(['F', 'major']);
      expect(getNameOfRelativeMajor('D', 'mixolydian')).to.deep.eq(['G', 'major']);
    });

    it('returns the correct scale for the aeolian (minor) mode', () => {
      expect(getNameOfRelativeMajor('A', 'minor')).to.deep.eq(['C', 'major']);
      expect(getNameOfRelativeMajor('D', 'minor')).to.deep.eq(['F', 'major']);
      expect(getNameOfRelativeMajor('E', 'minor')).to.deep.eq(['G', 'major']);
      expect(getNameOfRelativeMajor('A', 'aeolian')).to.deep.eq(['C', 'major']);
      expect(getNameOfRelativeMajor('D', 'aeolian')).to.deep.eq(['F', 'major']);
      expect(getNameOfRelativeMajor('E', 'aeolian')).to.deep.eq(['G', 'major']);
    });

    it('returns the correct scale for the locrian mode', () => {
      expect(getNameOfRelativeMajor('B', 'locrian')).to.deep.eq(['C', 'major']);
      expect(getNameOfRelativeMajor('E', 'locrian')).to.deep.eq(['F', 'major']);
      expect(getNameOfRelativeMajor('F#', 'locrian')).to.deep.eq(['G', 'major']);
    });
  });
});

