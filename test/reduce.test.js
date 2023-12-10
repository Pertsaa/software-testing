import { describe, it } from 'mocha';
import { expect } from 'chai';
import reduce from '../src/reduce.js'; // Assuming that reduce.js is in the same directory

describe('reduce', () => {
  it('should reduce an array of numbers correctly', () => {
    const result = reduce([1, 2, 3, 4], (sum, n) => sum + n, 0);
    expect(result).to.equal(10);
  });

  it('should reduce an object correctly', () => {
    const result = reduce(
      { 'a': 1, 'b': 2, 'c': 1 },
      (result, value, key) => {
        (result[value] || (result[value] = [])).push(key);
        return result;
      },
      {}
    );

    // The iteration order is not guaranteed, so we check the content
    expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
  });

  it('should use the first element as the initial value if accumulator is not given', () => {
    const result = reduce([1, 2, 3], (product, n) => product * n);
    expect(result).to.equal(6); // 1 * 2 * 3 = 6
  });

  // Add more test cases as needed

});
