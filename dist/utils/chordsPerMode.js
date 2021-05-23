"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var major = function major(scale) {
  return {
    I: scale[0] + " major (7)",
    ii: scale[1] + " minor (7)",
    iii: scale[2] + " minor (7)",
    IV: scale[3] + " major (7)",
    V: scale[4] + " major (dominant 7)",
    vi: scale[5] + " minor (7)",
    viiº: scale[6] + " diminished (half 7)"
  };
};

var minor = function minor(scale) {
  return {
    i: scale[0] + " minor (7)",
    iiº: scale[1] + " diminished (half 7)",
    III: scale[2] + " major (7)",
    iv: scale[3] + " minor (7)",
    v: scale[4] + " minor (7)",
    VI: scale[5] + " major (7)",
    VII: scale[6] + " major (dominant 7)"
  };
};

var CHORDS_PER_MODE = {
  major: major,
  ionian: major,
  minor: minor,
  aeolian: minor
};

exports.default = CHORDS_PER_MODE;