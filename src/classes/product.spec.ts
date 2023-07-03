import { Product } from './product';

const createdSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undifened', () => {
    const sut = createdSut('celular', 1000);
    expect(sut).toHaveProperty('name', 'celular');
    expect(sut.price).toBeCloseTo(1000);
  });
});
