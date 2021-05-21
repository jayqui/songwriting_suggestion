'use strict';

var _sample = require('./utils/sample');

var _sample2 = _interopRequireDefault(_sample);

var _selectWeighted = require('./utils/selectWeighted');

var _selectWeighted2 = _interopRequireDefault(_selectWeighted);

var _emotions = require('./options/emotions');

var _emotions2 = _interopRequireDefault(_emotions);

var _timeSignatures = require('./options/timeSignatures');

var _timeSignatures2 = _interopRequireDefault(_timeSignatures);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emotion = (0, _sample2.default)(_emotions2.default);
var timeSignature = (0, _selectWeighted2.default)(_timeSignatures2.default);

function run() {
  return {
    emotion: emotion,
    timeSignature: timeSignature
  };
}

console.log(run());