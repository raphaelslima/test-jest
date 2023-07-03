import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createdIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createdEnterpresiCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName e cpf', () => {
    const sut = createdIndividualCustomer('Raphael', 'Lima', '857-898-896.82');
    expect(sut).toHaveProperty('firstName', 'Raphael');
    expect(sut).toHaveProperty('lastName', 'Lima');
    expect(sut).toHaveProperty('cpf', '857-898-896.82');
  });

  it('should have methods getName and getIDN', () => {
    const sut = createdIndividualCustomer('Raphael', 'Lima', '857-898-896.82');
    expect(sut.getName()).toBe('Raphael Lima');
    expect(sut.getIDN()).toBe('857-898-896.82');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name e cnpj', () => {
    const sut = createdEnterpresiCustomer('Raphael CA', '6699484894649');
    expect(sut).toHaveProperty('name', 'Raphael CA');
    expect(sut).toHaveProperty('cnpj', '6699484894649');
  });

  it('should  have getName and getIDN', () => {
    const sut = createdEnterpresiCustomer('Raphael CA', '6699484894649');
    expect(sut.getName()).toBe('Raphael CA');
    expect(sut.getIDN()).toBe('6699484894649');
  });
});
