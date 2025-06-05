/// <reference types="cypress"/>
import login from '../support/login';
import horario from '../support/horario';

describe('Funcionamento de horario', () => {  
  it('Horario inadequado', () => {  
    login.acessarSistema() // Abre o sistema  
    login.loginEmailExistente() // Faz um login com e-mail existente  
    cy.wait(12000) // Aguarda o sistema carregar  
    horario.validarHorario() //Validar se o a loja está fechada
  });
}); 