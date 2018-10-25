import ColorController from '../../api/controllers/color.controller';

describe('ColorController', () => {
  it('should be instanceable', () => {
    expect(new ColorController()).toBeInstanceOf(ColorController);
  });
});
