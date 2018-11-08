import IconController from '../../api/controllers/icon.controller';
import Abstract from '../../api/controllers/abstract.controller';

const mockCreate = jest.fn();
const mockGetList = jest.fn();
const mockGetByName = jest.fn();
jest.mock('../../api/controllers/abstract.controller', () => {
  return jest.fn().mockImplementation(() => {
    return {create: mockCreate, getList: mockGetList, getByName: mockGetByName};
  });
});

beforeEach(async () => {
  await Abstract.mockClear();
  await mockCreate.mockClear();
  await mockGetList.mockClear();
  await mockGetByName.mockClear();
});

describe('IconController', () => {
  it('The IconController instance can be created.', () => {
    const icon = new IconController();
    expect(Abstract).toHaveBeenCalledTimes(1);
    expect(icon).toBeTruthy();
  });

  it('Should have called create method.', () => {
    const icon = new IconController();
    icon.create();
    expect(mockCreate).toHaveBeenCalled();
  });

  it('Should have called getList method.', () => {
    const icon = new IconController();
    icon.getList();
    expect(mockGetList).toHaveBeenCalled();
  });

  it('Should have called getByName method.', () => {
    const icon = new IconController();
    icon.getByName();
    expect(mockGetByName).toHaveBeenCalled();
  });
});
