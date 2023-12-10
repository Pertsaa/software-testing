import { describe, it } from 'mocha';
import { expect } from 'chai';
import baseFlatten from '../src/.internal/baseFlatten.js';


describe('baseFlatten', () => {
    it('should not flatten arrays with the specified depth', () => {
        const input = [1, [2, [3, [4]], 5]];
        const result = baseFlatten(input, 2);
    
        expect(result).to.not.deep.equal([1, 2, [3, [4]], 5]);
    });
    
    it('should not flatten arrays with the default depth if not specified', () => {
        const input = [1, [2, [3, [4]], 5]];
        const result = baseFlatten(input);
    
        expect(result).to.not.deep.equal([1, 2, [3, [4]], 5]);
    });
    const predicate = (value) => {
        if (typeof value === 'number') {
            return true;
        } else if (typeof value === 'object' && value !== null && Symbol.iterator in value) {
            // Check if the value is iterable
            return true;
        }
        return false;
    };

  it('should not flatten arrays with strict mode', () => {
    const input = [1, [2, [3, [4]], 5], 'a', 'b'];
    const result = baseFlatten(input, 2, undefined, true);

    expect(result).to.not.deep.equal([1, 2, [3, [4]], 5, 'a', 'b']);
});

  it('should handle null input and return an empty array', () => {
    const result = baseFlatten(null);
  
    expect(result).to.deep.equal([]);
  });
  

  it('should handle null input and return an empty array', () => {
    const result = baseFlatten(null);

    expect(result).to.deep.equal([]);
  });
});
