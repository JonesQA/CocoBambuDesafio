///reference types="cypress"/>
import login from '../support/login';

describe('Erro Compra Com Pix', () => {
  it('LOGIN SUCESSO', () => {
    login.acessarSistema();      // Abre o sistema
    login.loginEmailExistente(); // Faz um login com e-mail existente
    cy.wait(15000); // Aguarda o site carregar;
    
//Seleciona a promomção e insere na sacola
    cy.get('[src="https://api-cupdeschom.cocobambu.com/media/images/promotional_post/462470b8a8914827a74265a8c9b80a8f.png"]').should('be.visible').click(); // Clica no ítem promocional
    cy.get('.button-submit-content').click(); // Adiciona ítem ao carrinho 
    cy.wait(10000); // Aguarda o site carregar
    cy.get('.container').click(); // Verifica a Sacola 
    cy.wait(12000); // Aguarda o site carregar
    cy.get('.confirm-order-button').click(); // Clica em Selecionar Forma de Pagamento 
    cy.get('.online-payment > :nth-child(2)').click(); // Seleciona Pix
    cy.wait(10000); // Aguarda o site carregar
    cy.get('.confirm-order-button').click(); // Clica em Confirmar Pedido
    cy.get('.confirm-button').click(); // Clica em Confirmar Pedido novamente
    cy.contains('Pagamento por pix indisponível no momento.').should('be.visible'); // Verifica se a mensagem de erro é exibida
  })
})

