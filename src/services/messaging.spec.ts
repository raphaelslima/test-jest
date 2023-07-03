/*
  - Função cratedSut é uma função que estância a classe pricipal que será testada.
*/

import { Messaging } from './messaging';

const createdSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undifened', () => {
    const sut = createdSut();
    expect(sut.sendMessage('hello world')).toBeUndefined();
  });

  it('should console.log once', () => {
    const sut = createdSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('hello world');
    expect(consoleSpy).toBeCalledTimes(1);
  });

  it('should console.log with "Mensagem enviada:" and msg', () => {
    const sut = createdSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('hello world');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'hello world');
  });
});
