class PedidoRecebidoPage {
    validarCompra() {
        cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido.')
    }

}

export default new PedidoRecebidoPage()