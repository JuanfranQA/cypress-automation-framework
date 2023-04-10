/// <reference types="Cypress" />

/* HOOKS ----> Estos son útiles para establecer las condiciones que desea ejecutar antes de un conjunto de pruebas o antes de cada prueba. 
También son útiles para limpiar las condiciones después de una serie de pruebas o después de cada prueba.
- Dichas condiciones se ejecutan en cada plan de pruebas.
- No vamos a repetir código y será más legible.
- Ejemplo en: radio-buttons
- Challenge --> checkboxes */

describe('Hooks', () => {
    before(() => {
        cy.log("runs once before all tests in the block")
    })

    beforeEach(() => {
        cy.log("runs once before all tests in the block")
    })

    afterEach(() => {
        cy.log("runs once before all tests in the block")
    })

    after(() => {
        cy.log("runs once before all tests in the block")
    })

    ///// ----- PRUEBAS ------
    it("Example test1", () => {
        cy.log("Example test1!")
    })

    it("Example test2", () => {
        cy.log("Example test2!")
    })
});