import IconController from '../../api/controllers/icon.controller';

describe('IconController', () => {
  it('should be instanceable', () => {
    expect(new IconController()).toBeInstanceOf(IconController);
  });
});
