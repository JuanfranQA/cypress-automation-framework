/// <reference types="Cypress" />
describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })
    it("children() to get the children of DOM elements", () => {
      cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us')
    });
  
    it("closest() to validate the closest ancestor DOM element", () => {
      cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group') //Obtenga el primer elemento DOM que coincida con el selector(más cercano)
      //Encuentra el elemento más cercano del .traversal-badge la clase 'ul' 
    });
  
    it("eq() to retrieve a specific element based on index", () => { // --> * para seleccionar todos los elementos de la lista.
      cy.get('.traversal-drinks-list > *').eq(2).should('contain', 'Milk') // El elemento 2 de la lista tiene que contener Milk
    });
  
    it("filter() to retrieve DOM elements that match a specific selector", () => {
      cy.get('.btn-group-toggle > *').filter('.active').should('contain', 'Button-1') // Filtar por active.
	
    });
  
    it("find() to retrieve DOM elements of a given selector", () => {
      cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7)
    });
  
    it("first() to retrieve the first DOM element within elements ", () => {
      cy.get('.traversal-table > tbody > tr > td').first().should('contain', 'Andy') //Decir cual es el primer elemento que se encuentra.
    });
  
    it("last() to retrieve the last DOM element within elements", () => {
      cy.get('.traversal-table > tbody > tr > td').last().should('contain', 'Scott')//Decir cual es el último elemento que se encuentra.
    });
  
    it("nextAll() to get all of the next sibling DOM elements within elements", () => {
      //Obtener todos los hermanos siguientes dado un elemento.
      cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', 3) //En este ejemplo me tiene que pasar el test diciendo que tiene 3 hermanos,
    });
  
    it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
      //Obtenga todos los hermanos siguientes de cada elemento DOM en un conjunto de elementos DOM coincidentes hasta el elemento proporcionado, pero sin incluirlo.
      cy.get('#coffee').nextUntil('#milk').should('have.length', 1) //No contamos los elementos de "inicio" y "final"
    });
  
    it("not() to remove DOM element(s) from the set of elements", () => { //Lo opuesto a .filter()
      //cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', 'disabled')
      cy.get('.traversal-button-states > button').not('.disabled').should('have.length', 3)
    });
  
    it("parent() To get parent DOM element of elements", () => { //sube un nivel
      cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor sit amet')
    });
  
    it("parents() to get parents DOM element of elements", () => { //sube varios niveles
      cy.get('.traversal-cite').parents().should('match', 'blockquote')
    });
  
    it("prev() to get the previous sibling DOM element within elements", () => { // PREV --> Obtenga el hermano inmediatamente anterior de cada elemento en un conjunto de elementos.
      cy.get('#sugar').prev().should('contain', 'Espresso') //.contains('Expresso)
    });
  
    it("prevAll() to get all previous sibling DOM elements within elements", () => { //PREVALL --> Obtenga todos los hermanos anteriores de cada elemento DOM en un conjunto de elementos DOM coincidentes.
      cy.get('.sales').prevAll().should('have.length', 2)
    });
  
    it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => { // PREVUNITL --> todos los hermanos en un conjunto.
      cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)
    });
  
    it("siblings() To get all sibling DOM elements of elements", () => { // Obtenga elementos DOM hermanos.ES una consulta
      cy.get('.traversal-button-other-states .active').siblings().should('have.length', 3)
    });
});
  