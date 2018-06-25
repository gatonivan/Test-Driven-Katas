const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Should break if line is greater then column elements', () => {
      expect(wrap("abcdefghijklmnopqrst uvwxyz",20)).to.equal("abcdefghijklmnopqrst\nuvwxyz")
  });
  it('Should break line more then once, if neccessary', () => {
      expect(wrap("aaaaaaaaaa aaaaaaaaaa aaaaaaaaaa",10)).to.equal("aaaaaaaaaa\naaaaaaaaaa\naaaaaaaaaa")
  })
});
