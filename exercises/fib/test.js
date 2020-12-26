const fib = require('./index');
describe('Fib', () => {
  it('Fib function is defined', () => {
    expect(typeof fib).toEqual('function');
  });

  it('calculates correct fib value for 1', () => {
    expect(fib(1)).toEqual(1);
  });

  it('calculates correct fib value for 2', () => {
    expect(fib(2)).toEqual(1);
  });

  it('calculates correct fib value for 3', () => {
    expect(fib(3)).toEqual(2);
  });

  it('calculates correct fib value for 4', () => {
    expect(fib(4)).toEqual(3);
  });

  it('calculates correct fib value for 15', () => {
    expect(fib(39)).toEqual(63245986);
  });
})
