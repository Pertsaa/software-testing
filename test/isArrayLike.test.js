import { describe, it } from 'mocha';
import { expect } from 'chai';
import isArrayLike from '../src/isArrayLike.js';

describe('isArrayLike', () => {
  it('should return true for arrays', () => {
    expect(isArrayLike([1, 2, 3])).to.be.true;
  });

  it('should return true for array-like objects (e.g., DOM collections)', () => {
    const mockArrayLikeObject = { length: 3 };
    expect(isArrayLike(mockArrayLikeObject)).to.be.true;
  });

  it('should return true for string', () => {
    expect(isArrayLike('abc')).to.be.true;
  });

  it('should return false for functions', () => {
    const mockFunction = () => {};
    expect(isArrayLike(mockFunction)).to.be.false;
  });

  it('should return false for null', () => {
    expect(isArrayLike(null)).to.be.false;
  });

  it('should return false for undefined', () => {
    expect(isArrayLike(undefined)).to.be.false;
  });

  it('should return false for a number', () => {
    expect(isArrayLike(42)).to.be.false;
  });

  it('should return false for an object without a length property', () => {
    const mockObjectWithoutLength = { name: 'John' };
    expect(isArrayLike(mockObjectWithoutLength)).to.be.false;
  });

  it('should return false for a function object', () => {
    expect(isArrayLike(Function)).to.be.false;
  });
});
