const { multiples } = require('../lib/multiples')

describe('multiple function', () => {
  it('returns an array from 1 to 100', () => {
    const n = 1;
    const array = multiples(n);
    expect(array).toEqual(expect.any(Array));
  });
  it('returns multiples of 15', () => {
    const n = 15;
    const array = multiples(n);
    expect(array).toEqual([15, 30, 45, 60, 75, 90]);
  });
});
