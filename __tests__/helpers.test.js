import flattenArray from '../helpers';

describe('helpers.js ', () => {
  xit('should flatten an array', () => {
    const arr = [1, [2], [[3], [[4]]]];
    expect(flattenArray(arr)).toEqual(expect.arrayContaining([1, 2, 3, 4]));
    expect(flattenArray(arr)).not.toEqual(expect.arrayContaining([1, 2, [3], 4]));
  });
});
