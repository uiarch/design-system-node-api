import Abstract from '../../api/controllers/abstract.controller';

describe('Abstract', () => {
  /**
   * Test our abstract class instantiation as it should throw an error.
   *
   * @return {TypeError}
   */
  function throwTypeError() {
    return new Abstract();
  }

  it('should not be instanceable', () => {
    expect(throwTypeError).toThrowError(TypeError);
  });
});
