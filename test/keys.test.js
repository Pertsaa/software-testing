import { describe, it } from 'mocha';
import { expect } from 'chai';
import keys from '../src/keys.js';

describe('keys function', () => {
  it('should return an array of own enumerable property names of an object', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }

    Foo.prototype.c = 3;

    const fooInstance = new Foo();
    const result = keys(fooInstance);

    // The order of keys is not guaranteed, so we need to check if all expected keys are present
    expect(result).to.include.members(['a', 'b']);
    expect(result.length).to.equal(2);
  });

  it('should return an array of property names for string input', () => {
    const result = keys('hi');

    expect(result).to.include.members(['0', '1']);
    expect(result.length).to.equal(2);
  });

  it('should return an empty array for an empty object', () => {
    const result = keys({});

    expect(result).to.be.an('array').that.is.empty;
  });

  it('should return an empty array for null input', () => {
    const result = keys(null);

    expect(result).to.be.an('array').that.is.empty;
  });

  // Add more test cases as needed to cover different scenarios
});
