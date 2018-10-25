import SizeController from '../../api/controllers/size.controller';

describe('SizeController', () => {
  it('should be instanceable', () => {
    expect(new SizeController()).toBeInstanceOf(SizeController);
  });
});
