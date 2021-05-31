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

  /**
   * Test abstract class extension model is required.
   *
   * @return {TypeError}
   */
  function throwModelError() {
    class Test extends Abstract {}
    return (test = new Test());
  }

  it('should not be instanceable', () => {
    expect(throwTypeError).toThrowError(TypeError);
  });

  it('should depend on model object', () => {
    expect(throwModelError).toThrowError(TypeError);
  });

  it('Should have instantiated new class with methods and model.', () => {
    class Test extends Abstract {}
    const test = new Test({name: 'test'});
    expect(test).toHaveProperty('_model', {name: 'test'});
    expect(test).toHaveProperty('getByName');
    expect(test).toHaveProperty('getList');
    expect(test).toHaveProperty('create');
  });

  it('Should have called create method.', () => {
    class Test extends Abstract {}
    const create = (Abstract.prototype.create = jest.fn());
    const test = new Test({name: 'test'});
    test.create();
    expect(create).toHaveBeenCalledTimes(1);
    expect(test).toHaveProperty('_model', {name: 'test'});
  });

  it('Should have called getList method.', () => {
    class Test extends Abstract {}
    const getList = (Abstract.prototype.getList = jest.fn());
    const test = new Test({name: 'test'});
    test.getList();
    expect(getList).toHaveBeenCalledTimes(1);
    expect(test).toHaveProperty('_model', {name: 'test'});
  });

  it('Should have called getByName method.', () => {
    class Test extends Abstract {}
    const getByName = (Abstract.prototype.getByName = jest.fn());
    const test = new Test({name: 'test'});
    test.getByName();
    expect(getByName).toHaveBeenCalledTimes(1);
    expect(test).toHaveProperty('_model', {name: 'test'});
  });
});
