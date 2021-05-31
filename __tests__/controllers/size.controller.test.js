import SizeController from '../../api/controllers/size.controller';
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

describe('SizeController', () => {
  it('The SizeController instance can be created.', () => {
    const size = new SizeController();
    expect(Abstract).toHaveBeenCalledTimes(1);
    expect(size).toBeTruthy();
  });

  it('Should have called create method.', () => {
    const size = new SizeController();
    size.create();
    expect(mockCreate).toHaveBeenCalled();
  });

  it('Should have called getList method.', () => {
    const size = new SizeController();
    size.getList();
    expect(mockGetList).toHaveBeenCalled();
  });

  it('Should have called getByName method.', () => {
    const size = new SizeController();
    size.getByName();
    expect(mockGetByName).toHaveBeenCalled();
  });
});
