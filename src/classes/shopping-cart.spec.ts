import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart';

/*
  Teste mockado: São testes isolados usando objetos ficticios para simular o sistema.
*/

const createdSut = () => {
  return new ShoppingCart(createdDiscountMock());
};

const createdSutWithProducts = () => {
  const sut = createdSut();
  const productMock = createdItemMock('Celular', 1000);
  sut.addItem(productMock);
  sut.addItem(productMock);
  return sut;
};

const createdDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createdItemMock = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

describe('ShoppingCart', () => {
  it('should is empty de shoppingCart', () => {
    const sut = createdSut();
    expect(sut.isEmpty()).toBeTruthy();
  });

  it('should add 2 products', () => {
    const sut = createdSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should total products price', () => {
    const sut = createdSutWithProducts();
    expect(sut.total()).toBe(2000);
  });

  it('should total with discount price', () => {
    const sut = createdSutWithProducts();
    expect(sut.totalWithDicount()).toBe(2000);
  });

  it('should clear cart', () => {
    const sut = createdSutWithProducts();
    sut.clear();
    expect(sut.items.length).toBe(0);
  });

  it('should remove product', () => {
    const sut = createdSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(0);
    expect(sut.items.length).toBe(1);
  });
});
