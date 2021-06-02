import VersionController from '../../api/controllers/VersionController';
import Abstract from '../../api/controllers/AbstractController';

const mockCreate = jest.fn();
const mockGetList = jest.fn();
const mockGetByName = jest.fn();
jest.mock('../../api/controllers/AbstractController', () => {
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

describe('VersionController', () => {
  it('The VersionController instance can be created.', () => {
    const size = new VersionController();
    expect(Abstract).toHaveBeenCalledTimes(1);
    expect(size).toBeTruthy();
  });

  it('Should have called create method.', () => {
    const size = new VersionController();
    size.create();
    expect(mockCreate).toHaveBeenCalled();
  });

  it('Should have called getList method.', () => {
    const size = new VersionController();
    size.getList();
    expect(mockGetList).toHaveBeenCalled();
  });

  it('Should have called getByName method.', () => {
    const size = new VersionController();
    size.getByName();
    expect(mockGetByName).toHaveBeenCalled();
  });
});
