/*
  - Para criar um teste podemos criar usando a função it() ou test() que são duas funções iguais.

  - Ambas as funções recebem 2 parâmetros, sendo o primeiro a descrição e o segundo a função do teste.

  - Usamos a função describe para melhorar a leitura dos testes.
*/
describe('NOME DA CLASSE 1', () => {
  it('number is 1', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('NOME DA CLASSE 2', () => {
  test('value is not 2', () => {
    const value = 1;
    expect(value).not.toBe(2);
  });
});
