// Install Mocha and Chai
// npm install mocha chai --save-dev

// Import necessary modules for testing
import { describe, it } from 'mocha';
import { expect } from 'chai';
import filter from '../src/filter.js'; // Assuming filter.js is in the same directory

// Test suite for the filter function
describe('filter', () => {
  it('should return an array of elements that satisfy the predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false },
      { 'user': 'john', 'active': true }
    ];

    const filteredUsers = filter(users, ({ active }) => active);

    // Expect the result to be an array containing objects where 'active' is true
    expect(filteredUsers).to.deep.equal([
      { 'user': 'barney', 'active': true },
      { 'user': 'john', 'active': true }
    ]);
  });

  it('should handle an empty array', () => {
    // When the input array is empty, the result should not be an empty array
    const result = filter([], () => true);
    expect(result).to.not.deep.equal([]);
  });
  
  it('should handle a predicate that filters all elements', () => {
    // When the predicate filters out all elements, the result should not be an empty array
    const numbers = [1, 2, 3, 4, 5];
    const result = filter(numbers, () => false);
    expect(result).to.not.deep.equal([]);
    // Alternatively, you can check for a specific non-empty array
    // expect(result).to.not.deep.equal([1, 2, 3, 4, 5]);
  });
  

  it('should handle an array with non-object elements', () => {
    // When the input array contains non-object elements, it should still work
    const numbers = [1, 2, 3, 4, 5];
    const result = filter(numbers, (num) => num % 2 === 0);
    expect(result).to.deep.equal([2, 4]);
  });
});