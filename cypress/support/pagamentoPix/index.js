const elementos = require('./elementos').ELEMENTOS;
class pagamentoPix {
    pagamentoPixInvalido() {  
 cy.get(elementos.imagemPromocao).should('be.visible').click(); // Clica no ítem promocional
    cy.get(elementos.adicionarAoCarrinho).click(); // Adiciona ítem ao carrinho 
    cy.wait(10000); // Aguarda o site carregar
    cy.get(elementos.botaoSacola).click(); // Verifica a Sacola 
    cy.wait(12000); // Aguarda o site carregar
    cy.get(elementos.botaoFormaPagamento).click(); // Clica em Selecionar Forma de Pagamento 
    cy.get(elementos.selecionarPix).click(); // Seleciona Pix
    cy.wait(10000); // Aguarda o site carregar
    cy.get(elementos.botaoConfirmarPedido).click(); // Clica em Confirmar Pedido
    cy.get(elementos.botaConfirmarNovamente).click(); // Clica em Confirmar Pedido novamente
    cy.contains('Pagamento por pix indisponível no momento.').should('be.visible'); // Verifica se a mensagem de erro é exibida
    }
}
export default new pagamentoPix();



