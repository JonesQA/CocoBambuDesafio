import login from '../support/login';

describe('Teste de erro ao selecionar', () => { 
  it('Login e Seleção de Promoção com Erro', () => {
    login.acessarSistema();      // Abre o sistema
    login.loginEmailExistente(); // Faz um login com e-mail existente
    cy.wait(12000);              // Aguarda o sistema carregar

    // Escolhe um ítem promocional no carrinho 
    cy.get('[src="https://api-cupdeschom.cocobambu.com/media/images/promotional_post/b952a21d9abe4f238cba1fed5e92cb32.jpg"]').click();
    cy.wait(12000); // Aguarda 12 segundos para carregar o produto 
    cy.get('.container-location > img'); // Imagem de erro é exibida 
  });
});
    