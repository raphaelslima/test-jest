import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createdSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createdSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('should apply ten percent discount', () => {
    const sut = createdSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBe(9);
  });

  it('sould apply fifty percent discount', () => {
    const suit = createdSut(FiftyPercentDiscount);
    expect(suit.calculate(10)).toBe(5);
  });
});
