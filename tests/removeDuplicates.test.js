const { removeDuplicates } = require('../lib/removeDuplicates')

describe('multiple function', () => {
  it('returns multiples of 5', () => {
    const array = [3, 3, 5, 3, 12, 7]
    const newArray = removeDuplicates(array);
    expect(newArray).toEqual([3, 5, 12, 7]);
  });
});