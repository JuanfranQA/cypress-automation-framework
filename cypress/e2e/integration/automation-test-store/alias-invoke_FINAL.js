/// <reference types="cypress" />

/*Los alias son una construcción poderosa en Cypress que tiene muchos usos. Exploraremos cada una de sus capacidades a continuación.
Al principio, los usaremos para compartir objetos entre sus ganchos y sus pruebas.*/

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbnail");// obtener el nombre en texto y "guardamos" en una variable con as.
    cy.get("@productThumbnail").its("length").should("be.gt", 5); // its --> utilizamos para obtener una propiedad.
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner"); //Comprobar que el nombre extraido sea el correcto o igual al esperado.
  });

  it.only("Validate product thumbnail", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.thumbnail').as('productThumbnail')
    cy.get('@productThumbnail').should('have.length', 16)
    cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
  });
});
