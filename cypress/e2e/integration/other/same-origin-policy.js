/// <reference types="cypress" />

describe("Cypress web security", () => {
    it("Validate visiting two different domains", () => { //No podemos visitar dos dominios diferentes
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://automationteststore.com/');
    });

    it("Validate visiting two different domains via user actions", () => { //Error si no se ha activado chromeWebSecurity: false en cypress.config
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });

    it('Origin command', () => { //Si 
       /* cy.origin('Webdriveruniversity.com', () => {
            cy.visit("/");
        })

        cy.origin('automationteststore.com', () => {
            cy.visit("/");
        })*/
        cy.visit('http://www.webdriveruniversity.com/')
        cy.visit('http://selectors.webdriveruniversity.com/')
    })
})