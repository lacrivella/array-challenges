const { multiples } = require('../lib/multiples')

describe('multiple function', () => {
  it('returns an array from 1 to 100', () => {
    const multiple = 1;
    const array = multiples(multiple);
    expect(array).toEqual(expect.any(Array));
  });
});
