class CheckoutPage {
    concluirCompra() {
        cy.get('.checkout-button')
        .click()
    }

    fazerLogin(usuario, senha) {
        cy.get('.showlogin').click()
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha, { log: false }) //não mostrar nos logs o valor da senha
        cy.get('.woocommerce-button').click()
    }

    finalizarComprar(){
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }

}

export default new CheckoutPage()