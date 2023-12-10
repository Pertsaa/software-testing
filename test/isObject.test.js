import { describe, it } from 'mocha';
import { expect } from 'chai';
import isObject from '../src/isObject.js';

describe('isObject', () => {
  it('should return true for plain objects', () => {
    expect(isObject({})).to.be.true;
  });

  it('should return true for arrays', () => {
    expect(isObject([1, 2, 3])).to.be.true;
  });

  it('should return true for functions', () => {
    expect(isObject(Function)).to.be.true;
  });

  it('should return false for null', () => {
    expect(isObject(null)).to.be.false;
  });

  it('should return false for undefined', () => {
    expect(isObject(undefined)).to.be.false;
  });

  it('should return false for numbers', () => {
    expect(isObject(42)).to.be.false;
  });

  it('should return false for strings', () => {
    expect(isObject('Hello')).to.be.false;
  });

  it('should return false for booleans', () => {
    expect(isObject(true)).to.be.false;
  });

  it('should return false for symbols', () => {
    expect(isObject(Symbol('foo'))).to.be.false;
  });
});
