/// <reference types="Cypress" />

describe("Interact with dropdown lists via webdriveruni", ()=>{
    it("Select specific values via select dropdown list", ()=>{
    
        cy.visit("/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#dropdowm-menu-1').select('c#') //Seleccionamos en el desplegable la opcion de C(tenemos que coger el value)
        cy.get('#dropdowm-menu-2').select('junit').should('have.value', 'junit')
        cy.get('#dropdowm-menu-3').select('javascript')

        //Challenge
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG') //otra forma de seleccionar una opcion.



    });

})