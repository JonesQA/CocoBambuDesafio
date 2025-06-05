describe('Fluxo de inserir endereço para comprar antes do login com avaliação final da compra', () => {
  it('Usuário insere o CEP, ecolhe restaurante, seleciona produto e faz login depois', () => {
    cy.visit('https://app-hom.cocobambu.com/delivery',{wait: 5000});


// Inserir CEP os invés de logar diretamente 
cy.get('.search-address-input').click(); // Seleciona o campo de CEP
cy.get('.search-address-input').type('70714-900'); // Digita o CEP
 cy.wait(5000); // Aguarda o site carregar
cy.get('.ion-page > :nth-child(5)').click(); // Clica no botão de buscar endereço
cy.wait(20000); // Aguarda o site carregar

// Selecionar Camarão Coco Bambu
cy.get('[src="https://api-cupdeschom.cocobambu.com/media/images/promotional_post/92329df80396400bac50c64df4337717.png"]').click(); // Clica no restaurante Camarão Coco Bambu
 cy.wait(5000); // Aguarda o site carregar
cy.get('.text-input > .ng-valid').click();  
cy.get('.text-input > .ng-valid').type('Adicionar molho extra, por favor'); // Insere observação

//Fazer login para finalizar a compra
cy.get('.bottom-bar > .ng-tns-c1527101380-3').click(); // Clica no botão de login
cy.get('#username > .input-wrapper > .native-wrapper').type('cocobambu_20@mailinator.com');
cy.get(':nth-child(3) > .ng-untouched > .input-wrapper > .native-wrapper').type('T227788t.');
cy.get('.buttons-container > :nth-child(1)').click();
cy.get('.is-primary').click();

// Inserir código de verificação
cy.get('[id^="otp_0_"]').type('A');
cy.get('[id^="otp_1_"]').type('A');
cy.get('[id^="otp_2_"]').type('A');
cy.get('[id^="otp_3_"]').type('A');
cy.get('[id^="otp_4_"]').type('A');
cy.get('[id^="otp_5_"]').type('A');
cy.wait(3000); //Aguarda o sistema carregar
cy.get('.buttons-container > :nth-child(1)').click();
cy.wait(20000); //Aguarda o sistema carregar

//Há um erro, pois o sistema não armazena as informações do pedido selecionado
//O usuário tem que selecionar o produto novamente

//O usuário deve selecionar um produto novamente
cy.get('[src="https://api-cupdeschom.cocobambu.com/media/images/promotional_post/462470b8a8914827a74265a8c9b80a8f.png"]').click();
cy.get('.button-submit-content > :nth-child(1)').click(); //Confirmar Pedido 
cy.get('.bag-button-items-quantity').click(); // Verifica a Sacola
cy.wait(6000); // Aguarda o site carregar
cy.get('.choose-payment-method-button').click(); // Clica em Selecionar Forma de Pagamento
cy.wait(5000); // Aguarda o site carregar

//Selecionar pagamento na entrega 
cy.get('.add-button').click(); // Seleciona adicionar novo cartão
cy.get('payment-authorizartion.ng-star-inserted > .container > :nth-child(1)').click(); // Seleciona Crédito
cy.get('#cardNumber').type('5173 9400 2844 7776'); // Digita o número do cartão
cy.get('#holderName').type('Leandro Jones C Santos'); // Digita o nome do titular
cy.get('#cc-exp-date').type('12/22'); // Digita a data de validade exírada
cy.get('.danger').should('contain', 'Cartão expirou');// Verifica se não há mensagem de erro

  });
});