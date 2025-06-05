const elementos = require('./elementos').ELEMENTOS;
class horario {
    validarHorario() {
        cy.wait(9000)
        cy.get(elementos.mensagemValidacao).should('contain', 'Estamos fechados no momento.')
    }
}
export default new horario();