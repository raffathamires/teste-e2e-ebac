class CarrinhoPage {
    concluirCompra() {
        cy.get('.checkout-button')
        .click()
    }


}

export default new CarrinhoPage()