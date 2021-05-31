import getScale from './getScale';

const major = (scale) => ({ // example of C: Cmaj7 Dm7 Em7 Fmaj7 G7 Amaj7 Bm7b5
  I: `${scale[0]} major (7)`,
  ii: `${scale[1]} minor (7)`,
  iii: `${scale[2]} minor (7)`,
  IV: `${scale[3]} major (7)`,
  V: `${scale[4]} major (dominant 7)`,
  vi: `${scale[5]} minor (7)`,
  viiº: `${scale[6]} diminished (half 7)`,
});

const dorian = (scale) => ({ // example of D: Dm7 Em7 Fmaj7 G7 Amaj7 Bm7b5 Cmaj7
  i: `${scale[0]} minor (7)`,
  ii: `${scale[1]} minor (7)`,
  bIII: `${scale[2]} major (7)`,
  IV: `${scale[3]} major (dominant 7)`,
  v: `${scale[4]} minor (7)`,
  viº: `${scale[5]} diminished (half 7)`,
  bVII: `${scale[6]} major (7)`,
});

const phrygian = (scale) => ({ // example of E: Em7 Fmaj7 G7 Amaj7 Bm7b5 Cmaj7 Dm7
  i: `${scale[0]} minor (7)`,
  bII: `${scale[1]} major (7)`,
  bIII: `${scale[2]} major (dominant 7)`,
  iv: `${scale[3]} minor (7)`,
  vº: `${scale[4]} diminished (half 7)`,
  bVI: `${scale[5]} major (7)`,
  bvii: `${scale[6]} minor (7)`,
});

const lydian = (scale) => ({ // example of F: Fmaj7 G7 Amaj7 Bm7b5 Cmaj7 Dm7 Em7
  I: `${scale[0]} major (7)`,
  II: `${scale[1]} major (dominant 7)`,
  iii: `${scale[2]} minor (7)`,
  '#ivº': `${scale[3]} diminished (half 7)`,
  V: `${scale[4]} major (7)`,
  vi: `${scale[5]} minor (7)`,
  vii: `${scale[6]} minor (7)`,
});

const mixolydian = (scale) => ({ // example of G: G7 Amaj7 Bm7b5 Cmaj7 Dm7 Em7 Fmaj7
  I: `${scale[0]} major (dominant 7)`,
  ii: `${scale[1]} minor (7)`,
  iiiº: `${scale[2]} diminished (half 7)`,
  IV: `${scale[3]} major (7)`,
  v: `${scale[4]} minor (7)`,
  vi: `${scale[5]} minor (7)`,
  bVII: `${scale[6]} major (7)`,
});

const minor = (scale) => ({ // example of A: Amaj7 Bm7b5 Cmaj7 Dm7 Em7 Fmaj7 G7
  i: `${scale[0]} minor (7)`,
  iiº: `${scale[1]} diminished (half 7)`,
  III: `${scale[2]} major (7)`,
  iv: `${scale[3]} minor (7)`,
  v: `${scale[4]} minor (7)`,
  VI: `${scale[5]} major (7)`,
  VII: `${scale[6]} major (dominant 7)`,
});

const locrian = (scale) => ({ // example of B: Bm7b5 Cmaj7 Dm7 Em7 Fmaj7 G7 Amaj7
  iº: `${scale[0]} diminished (half 7)`,
  bII: `${scale[1]} major (7)`,
  biii: `${scale[2]} minor (7)`,
  iv: `${scale[3]} minor (7)`,
  bV: `${scale[4]} major (7)`,
  bVI: `${scale[5]} major (dominant 7)`,
  bvii: `${scale[6]} minor (7)`,
});

const CHORDS_PER_MODE = {
  major,
  ionian: major,
  dorian,
  phrygian,
  lydian,
  mixolydian,
  minor,
  aeolian: minor,
  locrian,
};

export default function getChordsInScale(scaleNoteName, mode) {
  const scale = getScale(scaleNoteName, mode);
  return CHORDS_PER_MODE[mode](scale);
}
