/// <reference types="Cypress" />

describe('Test File Upload', () => {
    it('Upload a file', () => {
        cy.visit("/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        cy.get('#myFile').selectFile("cypress/fixtures/laptop.png")
        cy.get('#submit-button').click()
    });

    it('Upload a No file', () => {
        cy.visit("/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
        cy.get('#submit-button').click()
        
    });
});