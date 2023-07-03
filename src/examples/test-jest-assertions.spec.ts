/*
  - toBe(): Verifica se é igual, mas só funciona com valores primitivos e não com obj.

  - toEqual(): Verifica se -e igual, funciona com obj e primitivos

  - .not : Verifica se não é a assertion.

  - toBeNull() : Verifica se é nulo.

  - toBeFalsy() : Verifica se é falso.

  - toBeGreaterThan(9) : Verifica se é maior

  - toBeLessThan(11) : Verifica se é menor

  - toBeCloseTo() : Verifica a aproximidade com o númer passado.

  - toHaveProperty('toString') : Se existe propriedade ou metodo
*/

describe('Primitive value', () => {
  it('should test jest assetions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).not.toBeNull();
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeCloseTo(10.0000001, 3);
    expect(number).toHaveProperty('toString');
  });
});

/*

*/
describe('Obj value', () => {
  it('should test jest assertons with objs', () => {
    const person = { name: 'Raphael Lima', age: 25 };
    const anotherPerson = { ...person };

    expect(anotherPerson).toEqual(person);
    expect(person).toHaveProperty('age', 25);
  });
});
