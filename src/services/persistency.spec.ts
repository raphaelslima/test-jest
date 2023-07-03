/*
  Para checar comportamentos de classes precisamos usar o spyOn, isso é usado para verificar os metodos e classes externas que são chamdas nessa classe

  afterEach serve para o jest excutar uma ação depis de cada teste, no exemplo passamos uma função que limpa os mocks (spy) em cada teste
*/

import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined saveOrder', () => {
    // Classe princial que está sendo testada
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toBeCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
