const elementos = require('./elementos').ELEMENTOS;
class login {
    acessarSistema(){
        cy.visit('https://app-hom.cocobambu.com/delivery')
    }

    loginComSucesso() {
    cy.get(elementos.botaoPerfil).click()
    cy.get(elementos.botaoEntrar).click()
    cy.get(elementos.botaoCadastrar).click()
    cy.get(elementos.campoNomeCompleto).type("Leandro Jones")
    cy.get(elementos.CampoEmail).type("cocobambu_30@mailinator.com")
    cy.get(elementos.campoSenha).type("T227788t.")  
    cy.get(elementos.campoConfirmarSenha).type("T227788t.")
    cy.get(elementos.campoSelecioneSeuEstado).click()
    cy.get(elementos.confirmarEstado).click()
    cy.get(elementos.botaoTermoDeUso).click()
    cy.get(elementos.botaoAceitar).click()
    cy.wait(2000)
    cy.get(elementos.botaoCriarConta).click()
    cy.wait(5000)
    cy.get(elementos.botaoFechar).click()
    cy.wait(5000)
    cy.get('[id^="otp_0_"]').type("A")
    cy.get('[id^="otp_1_"]').type("A")
    cy.get('[id^="otp_2_"]').type("A")
    cy.get('[id^="otp_3_"]').type("A")
    cy.get('[id^="otp_4_"]').type("A")
    cy.get('[id^="otp_5_"]').type("A")
    cy.get(elementos.botaoAcessar).click()
    cy.wait(5000)
    cy.get(elementos.CampoMensagemLoginSucesso).should('contain', 'Poxa, ainda não entregamos nesse endereço, mas temos outras opções para você')
    }

    loginEmailExistente(){
        cy.get(elementos.entrarNoPerfil).click()    
        cy.get(elementos.OpçãoEntrar).click()
        cy.get(elementos.emailLogin).type ("cocobambu_13@mailinator.com")
        cy.get(elementos.senhaLogin).type("T227788t.")
        cy.get(elementos.botaoEntrarLogin).click()
        cy.get(elementos.botaoFechar).click()
        cy.get(elementos.CampoCodigo1).type("A")
        cy.get(elementos.CampoCodigo2).type("A")
        cy.get(elementos.CampoCodigo3).type("A")
        cy.get(elementos.CampoCodigo4).type("A")
        cy.get(elementos.CampoCodigo5).type("A")
        cy.get(elementos.CampoCodigo6).type("A")
        cy.get(elementos.botaoAcessar).click()
    
        
      
        
        cy.wait(5000)       



    }

    adicionar_carrinho() {





} 
}
export default new login();