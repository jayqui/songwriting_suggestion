import { expect } from 'chai'
import getChordsInScale from '../src/options/getChordsInScale';

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

    it('returns the chords in the scale for the dorian mode', () => {
      expect(getChordsInScale('D', 'dorian')).to.deep.eq({
        i: 'D minor (7)',
        ii: 'E minor (7)',
        bIII: 'F major (7)',
        IV: 'G major (dominant 7)',
        v: 'A minor (7)',
        viº: 'B diminished (half 7)',
        bVII: 'C major (7)',
      });
    });

    it('returns the chords in the scale for the phrygian mode', () => {
      expect(getChordsInScale('E', 'phrygian')).to.deep.eq({
        i: 'E minor (7)',
        bII: 'F major (7)',
        bIII: 'G major (dominant 7)',
        iv: 'A minor (7)',
        vº: 'B diminished (half 7)',
        bVI: 'C major (7)',
        bvii: 'D minor (7)',
      });
    });

    it('returns the chords in the scale for the lydian mode', () => {
      expect(getChordsInScale('F', 'lydian')).to.deep.eq({
        I: 'F major (7)',
        II: 'G major (dominant 7)',
        iii: 'A minor (7)',
        '#ivº': 'B diminished (half 7)',
        V: 'C major (7)',
        vi: 'D minor (7)',
        vii: 'E minor (7)',
      });
    });

    it('returns the chords in the scale for the mixolydian mode', () => {
      expect(getChordsInScale('G', 'mixolydian')).to.deep.eq({
        I: 'G major (dominant 7)',
        ii: 'A minor (7)',
        iiiº: 'B diminished (half 7)',
        IV: 'C major (7)',
        v: 'D minor (7)',
        vi: 'E minor (7)',
        bVII: 'F major (7)',
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

    it('returns the chords in the scale for the locrian mode', () => {
      expect(getChordsInScale('B', 'locrian')).to.deep.eq({
        iº: 'B diminished (half 7)',
        bII: 'C major (7)',
        biii: 'D minor (7)',
        iv: 'E minor (7)',
        bV: 'F major (7)',
        bVI: 'G major (dominant 7)',
        bvii: 'A minor (7)',
      });
    });
  });
});
