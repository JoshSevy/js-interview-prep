const reverseInt = require('./index');

describe('Reverse Int', () => {
 it('ReverseInt function exists', () => {
    expect(reverseInt).toBeDefined();
  });
  
 it('ReverseInt handles 0 as an input', () => {
    expect(reverseInt(0)).toEqual(0);
  });
  
 it('ReverseInt flips a positive number', () => {
    expect(reverseInt(5)).toEqual(5);
    expect(reverseInt(15)).toEqual(51);
    expect(reverseInt(90)).toEqual(9);
    expect(reverseInt(2359)).toEqual(9532);
  });
  
 it('ReverseInt flips a negative number', () => {
    expect(reverseInt(-5)).toEqual(-5);
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-90)).toEqual(-9);
    expect(reverseInt(-2359)).toEqual(-9532);
  });
})
