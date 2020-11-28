const steps = require('./index');

describe('Steps', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });
  
  afterEach(() => {
    console.log.mockRestore();
  });
  
  it('steps is a function', () => {
    expect(typeof steps).toEqual('function');
  });
  
  it('steps called with n = 1', () => {
    steps(1);
    expect(console.log.mock.calls[0][0]).toEqual('#');
    expect(console.log.mock.calls.length).toEqual(1);
  });
  
  it('steps called with n = 2', () => {
    steps(2);
    expect(console.log.mock.calls[0][0]).toEqual('# ');
    expect(console.log.mock.calls[1][0]).toEqual('##');
    expect(console.log.mock.calls.length).toEqual(2);
  });
  
  it('steps called with n = 3', () => {
    steps(3);
    expect(console.log.mock.calls[0][0]).toEqual('#  ');
    expect(console.log.mock.calls[1][0]).toEqual('## ');
    expect(console.log.mock.calls[2][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(3);
  });
});
