/// <reference types="cypress" />
import login from '../support/login';
import promocao from '../support/promocao';
import pagamentoPix from '../support/pagamentoPix';
import horario from '../support/horario';
import cadastroCartao from '../support/cadastroCartao';


describe('Testes UI', () => {
 it('Cartão expirou', () => {
    login.acessarSistema() // Abre o sistema
    cadastroCartao.cadastroCartaoExpirado() // Insere o endereço e tenta finalizar a compra com cartão expirado
 
   });

 it('Horario inadequado', () => {  
    login.acessarSistema() // Abre o sistema  
    login.loginEmailExistente() // Faz um login com e-mail existente  
    cy.wait(12000) // Aguarda o sistema carregar  
    horario.validarHorario() //Validar se o a loja está fechada
  });

 it('PAGAMENTO PIX INCORRETO', () => {
     login.acessarSistema();      // Abre o sistema
     login.loginEmailExistente(); // Faz um login com e-mail existente
     cy.wait(15000); // Aguarda \o site carregar;
     
 //Seleciona a promomção e insere na sacola
     pagamentoPix.pagamentoPixInvalido() // Seleciona a promoção e tenta finalizar a compra com Pix inválido
   })

 it('Login e Seleção de Promoção com Erro', () => {
     login.acessarSistema();      // Abre o sistema
     login.loginEmailExistente(); // Faz um login com e-mail existente
     cy.wait(12000);              // Aguarda o sistema carregar
 
     // Escolhe um ítem promocional no carrinho 
      promocao.promocaoInvalida();  
     });

});