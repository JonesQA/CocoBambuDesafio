const elementos = require('./elementos').ELEMENTOS;
class promocao {
    promocaoInvalida() {
    cy.get(elementos.imagemPromocao).click();
    cy.wait(12000); // Aguarda 12 segundos para carregar o produto 
    cy.get(elementos.imagemdeErro).should('be.visible'); // Imagem de erro é exibida
    }

}
export default new promocao();