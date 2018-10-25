import VersionController from '../../api/controllers/version.controller';

describe('VersionController', () => {
  it('should be instanceable', () => {
    expect(new VersionController()).toBeInstanceOf(VersionController);
  });
});
