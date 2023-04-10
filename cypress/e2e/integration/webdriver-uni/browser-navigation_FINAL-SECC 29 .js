/// <reference types="cypress" />

describe("Validate webdriveruni homepage links", () => {
    it("Confirm links redirect to the correct pages", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.reload()//Recargar la página
        cy.url().should('include', "/")
        //cy.reload(true) //reload without using cache

        cy.go('forward') //Ir "hacia delante" en la página de contact US
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true}) //Vamos a la página de login
        cy.url().should('include', 'Login-Portal') //Comprobamos que estamos en la correcta
        cy.go('back') //Volvemos a la principal

        //cy.go('back') da error si dejamos este, porque ya estamos en la página principal desde de la otra operacion.
        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true}) 
        cy.url().should('include', 'To-Do-List')
        cy.go('back') 
    });
})