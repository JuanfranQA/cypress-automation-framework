/// <reference types="Cypress" />

describe("Verify radio buttons via webdriveruni", ()=>{
    before(function() {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })

    it("Check specific radio buttons", ()=>{

        cy.get('#radio-buttons').find("[type='radio']").first().check()//Check --> marcamos el primero "radio" que se encuentra.
        cy.get('#radio-buttons').find("[type='radio']").eq(2).check()
        //Si dejo las dos sentencias activas, se selecciona uno y luego la otra. ¿no estaría correctamente, no?
    });

    it("Validate the states of specific radio buttons", ()=>{

        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')
        
        cy.get("[value='cabbage']").should('be.disabled')//Comprobar que esta desactivado
        
    });

})