const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
    it('Returns an empty array if number is less then 2', () => {
      expect(typeof twoSum([], 2)).to.equal(typeof []);
    })
    it('Does not return the same element twice', () => {
        expect(twoSum([1,3,3,4], 6)).to.eql([1,2]);
    })
});