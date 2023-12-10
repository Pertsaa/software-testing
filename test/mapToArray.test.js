import { describe, it } from 'mocha';
import { expect } from 'chai';
import mapToArray from '../src/.internal/mapToArray.js';

describe('mapToArray', () => {
  it('should convert a map to key-value pairs', () => {
    // Arrange
    const inputMap = new Map([
      ['key1', 'value1'],
      ['key2', 'value2'],
      ['key3', 'value3'],
    ]);

    // Act
    const result = mapToArray(inputMap);

    // Assert
    expect(result).to.be.an('array');
    expect(result).to.have.lengthOf(inputMap.size);

    // Check each key-value pair
    result.forEach(([key, value], index) => {
      expect(key).to.equal(`key${index + 1}`);
      expect(value).to.equal(`value${index + 1}`);
    });
  });

  it('should handle an empty map', () => {
    // Arrange
    const emptyMap = new Map();

    // Act
    const result = mapToArray(emptyMap);

    // Assert
    expect(result).to.be.an('array');
    expect(result).to.be.empty;
  });
});
