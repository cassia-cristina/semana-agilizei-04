/// <reference types="cypress" />

/*
    1. O que está sendo testado? Twiterr clone, Login
    2. Sob que circunstâncias, condições? Ao autenticar com credenciais válidas
    3. Qual o resultado esperado? Deve ser autenticado
*/

describe('Twitter Clone - Login', () => {

    // HOOKS -> Mocha
    // -> antes de cada ou todos os testes - > beforeEach / before
    // -> depois de cada ou todos os testes - > afterEach / after

    beforeEach(() => {
        cy.cloudinary();
    });


    it('Ao entrar com credenciais válidas, deve ser redirecionado para o feed', () => {
        cy.login();
        cy.visit('/');

        cy.get('nav ul li')
            .should('be.visible')
            .and('have.length', 6);
    });

});