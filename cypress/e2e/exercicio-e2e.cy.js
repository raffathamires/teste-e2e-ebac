/// <reference types="cypress" />
import produtosPage from '../support/page_objects/produto.page';
import carrinhoPage from '../support/page_objects/carrinho.page';
import checkoutPage from '../support/page_objects/checkout.page';
import pedidoRecebidoPage from '../support/page_objects/pedidoRecebido.page';

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        produtosPage.visitarUrl()
    })

    afterEach(() => {
        cy.screenshot()
    });

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.fixture('produtos').then(dados => {
            for(var i = 0; i < dados.length; i++){
                produtosPage.buscarProduto(dados[i].nomeProduto)
                produtosPage.addProdutoCarrinho(dados[i].tamanho, dados[i].cor, dados[i].quantidade)
            }
        })
        produtosPage.acessarCarrinho()
        carrinhoPage.concluirCompra()

        cy.fixture('perfil').then(dados => {
            checkoutPage.fazerLogin(dados.usuario,dados.senha)
        })
        checkoutPage.finalizarComprar()
        pedidoRecebidoPage.validarCompra()

    });


})