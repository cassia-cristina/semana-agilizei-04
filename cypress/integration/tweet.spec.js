/// <reference types="cypress" />

/*
    1. O que está sendo testado? Twiterr clone, Tweet
    2. Sob que circunstâncias, condições? Após entrar com texto curto
    3. Qual o resultado esperado? Tweet deve ser publicado no feed
*/

describe('Twitter Clone - Tweet', () => {

    beforeEach(() => {
        cy.cloudinary();
        cy.login();
        cy.visit('/');
    });


    it('Ao entrar com texto curto, este deve ser publicado no feed', () => {
       cy.tweet();
       cy.get('[role=alert]').should('include.text', 'Your tweet has been posted');
    });

});