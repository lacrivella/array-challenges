const { multiples } = require('../lib/multiples')

describe('multiple function', () => {
  it('returns an array from 1 to 100', () => {
    const n = 1;
    const array = multiples(n);
    expect(array).toEqual(expect.any(Array));
  });

  it('returns multiples of 5', () => {
    const n = 5;
    const array = multiples(n);
    expect(array).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
  });

  it('returns multiples of 15', () => {
    const n = 15;
    const array = multiples(n);
    expect(array).toEqual([15, 30, 45, 60, 75, 90]);
  });

  it('returns multiples of 113', () => {
    const n = 113;
    const array = multiples(n);
    expect(array).toEqual([]);
  });
});
