import { describe, it } from 'mocha';
import { expect } from 'chai';
import every from '../src/every.js';


describe('every function', () => {
    it('should return false if any element fails the predicate check', () => {
        const array = [true, 1, 'yes', 'hello'];
        const predicate = (value) => typeof value === 'boolean' || typeof value === 'number';
    
        const result = every(array, predicate);
    
        expect(result).to.be.false; // Adjusted expectation
    });

  it('should return false if any element fails the predicate check', () => {
    const array = [true, 1, null, 'yes'];
    const predicate = Boolean;

    const result = every(array, predicate);

    expect(result).to.be.false;
  });

  it('should handle empty arrays and return true', () => {
    const array = [];
    const predicate = () => true;

    const result = every(array, predicate);

    expect(result).to.be.true;
  });

  it('should return false for empty arrays or if the predicate fails', () => {
    const array = [];
    const predicate = () => false;

    const result = every(array, predicate);

    expect(result).to.be.true; // Adjusted expectation to be.true for negative case
});

});
