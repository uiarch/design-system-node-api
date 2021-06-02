import ColorController from '../../api/controllers/ColorController';
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
  // await Abstract.mockClear();
  await mockCreate.mockClear();
  await mockGetList.mockClear();
  await mockGetByName.mockClear();
});

describe('ColorController', () => {
  it('The ColorController instance can be created.', () => {
    const color = new ColorController();
    expect(Abstract).toHaveBeenCalledTimes(1);
    expect(color).toBeTruthy();
  });

  it('Should have called create method.', () => {
    const color = new ColorController();
    color.create();
    expect(mockCreate).toHaveBeenCalled();
  });

  it('Should have called getList method.', () => {
    const color = new ColorController();
    color.getList();
    expect(mockGetList).toHaveBeenCalled();
  });

  it('Should have called getByName method.', () => {
    const color = new ColorController();
    color.getByName();
    expect(mockGetByName).toHaveBeenCalled();
  });
});
