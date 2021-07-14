const {
  sum
} = require("./teste1.js");

describe('summation tests', () => {

  test('if summation of A and B are sucessful', () => {
    expect(sum(4,5)).toBe(9);
  });
})