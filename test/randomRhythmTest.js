import { expect } from 'chai'
import randomRhythm from '../src/options/randomRhythm';

describe("#randomRhythm", () => {
  it("returns a random rhythm when given an integer for beats per measure", () => {
    expect(randomRhythm(2)).to.match(/([*=_]{4}\|){2}/)
    expect(randomRhythm(3)).to.match(/([*=_]{4}\|){3}/)
    expect(randomRhythm(4)).to.match(/([*=_]{4}\|){4}/)
    expect(randomRhythm(6)).to.match(/([*=_]{4}\|){6}/)
    expect(randomRhythm(7)).to.match(/([*=_]{4}\|){7}/)
    expect(randomRhythm(8)).to.match(/([*=_]{4}\|){8}/)
  })
})
