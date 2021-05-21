"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sample;
function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
}