const maxChar = require('./index');

describe('MaxChar', () => {
  it('maxChar function exists', () => {
    expect(typeof maxChar).toEqual('function');
  });
  
  it('Finds the most frequently used char', () => {
    expect(maxChar('a')).toEqual('a');
    expect(maxChar('abcdefghijklmnaaaaa')).toEqual('a');
  });
  
  it('Works with numbers in the string', () => {
    expect(maxChar('ab1c1d1e1f1g1')).toEqual('1');
  });
})

