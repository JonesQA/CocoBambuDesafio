const elementos = require('./elementos').ELEMENTOS;
class cadastroCartao {
    cadastroCartaoExpirado() {

cy.get(elementos.campoCep).click(); // Seleciona o campo de CEP
cy.get(elementos.campoCep).type('70714-900'); // Digita o CEP
 cy.wait(5000); // Aguarda o site carregar
cy.get(elementos.buscarEndereco).click(); // Clica no botão de buscar endereço
cy.wait(20000); // Aguarda o site carregar

// Selecionar Camarão Coco Bambu
cy.get(elementos.imagemCamarao).click(); // Clica na imagem do Camarão Coco Bambu
 cy.wait(5000); // Aguarda o site carregar
cy.get(elementos.campoObervacao).click();  
cy.get(elementos.campoObervacao).type('Adicionar molho extra, por favor'); // Insere observação

//Fazer login para finalizar a compra
cy.get(elementos.botaoUserNaoLogado).click(); // Clica no botão de login
cy.get(elementos.campoEmail).type('cocobambu_20@mailinator.com');
cy.get(elementos.campoSenha).type('T227788t.');
cy.get(elementos.botaoLogin).click();
cy.get(elementos.botaoFechar).click();

// Inserir código de verificação
cy.get('[id^="otp_0_"]').type('A');
cy.get('[id^="otp_1_"]').type('A');
cy.get('[id^="otp_2_"]').type('A');
cy.get('[id^="otp_3_"]').type('A');
cy.get('[id^="otp_4_"]').type('A');
cy.get('[id^="otp_5_"]').type('A');
cy.wait(3000); //Aguarda o sistema carregar
cy.get(elementos.botaoConfirmarVerificacao).click();
cy.wait(20000); //Aguarda o sistema carregar

//Há um erro, pois o sistema não armazena as informações do pedido selecionado
//O usuário tem que selecionar o produto novamente

//O usuário deve selecionar um produto novamente
cy.get(elementos.imagem2).click();
cy.get(elementos.botaoConfirmarPedido).click(); //Confirmar Pedido
cy.wait(6000); 
cy.get(elementos.botaoSacola).click(); // Verifica a Sacola
cy.wait(6000); // Aguarda o site carregar
cy.get(elementos.botaoFormaPagamento).click(); // Clica em Selecionar Forma de Pagamento
cy.wait(5000); // Aguarda o site carregar

//Selecionar pagamento na entrega 
cy.get(elementos.botaoNovoCartao).click(); // Seleciona adicionar novo cartão
cy.get(elementos.selecionarCredito).click(); // Seleciona Crédito
cy.get(elementos.campoNumeroCartao).type('5173 9400 2844 7776'); // Digita o número do cartão
cy.get(elementos.campoNomeTitular).type('Leandro Jones C Santos'); // Digita o nome do titular
cy.get(elementos.campoDataValidade).type('12/22'); // Digita a data de validade exírada
cy.get(elementos.mensagemErro).should('contain', 'Cartão expirou');// Verifica se não há mensagem de erro
    }
}
export default new cadastroCartao();



