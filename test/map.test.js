import { describe, it } from 'mocha';
import { expect } from 'chai';
import map from '../src/map.js';

// Test case for the square function
describe('map', () => {
  it('should apply the iteratee function to each element of the array', () => {
    // Define the square function
    function square(n) {
      return n * n;
    }

    // Test the map function with the square function
    const result = map([4, 8], square);

    // Assert the result
    expect(result).to.eql([16, 64]);
  });

  // Test case for a different iteratee function
  it('should work with a different iteratee function', () => {
    // Define a different iteratee function
    function double(n) {
      return n * 2;
    }

    // Test the map function with the double function
    const result = map([3, 6, 9], double);

    // Assert the result
    expect(result).to.eql([6, 12, 18]);
  });

  // Test case for an empty array
  it('should return an empty array for an empty input array', () => {
    // Define an iteratee function (e.g., identity function)
    function identity(n) {
      return n;
    }

    // Test the map function with an empty array and identity function
    const result = map([], identity);

    // Assert the result
    expect(result).to.eql([]);
  });

  // Test case for undefined input array
  it('should return an empty array for undefined input array', () => {
    // Define an iteratee function (e.g., identity function)
    function identity(n) {
      return n;
    }

    // Test the map function with undefined array and identity function
    const result = map(undefined, identity);

    // Assert the result
    expect(result).to.eql([]);
  });
});
