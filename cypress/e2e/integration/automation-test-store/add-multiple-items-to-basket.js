import AutoStore_HomePage_PO from "../../../support/pageObjects/automation-test-store/AutoStore_HomePage_PO";
import AutoStore_HairCare_PO from "../../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";

/// <reference types="cypress" />

describe("Add multiple items to basket", () => {
    const autoStore_HomePage = new AutoStore_HomePage_PO();
    const autoStore_HairCare = new AutoStore_HairCare_PO();

    before(function() {
        cy.fixture("products").then(function(data) {
            globalThis.data = data;
        })
    })

    beforeEach(function() {
      /*cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=']").contains("Hair Care").click();*/
      
      cy.clearLocalStorage(); //Borrar las cookies
      cy.clearCookies();
      autoStore_HomePage.accessHomePage();
      autoStore_HomePage.clickOn_HairCare_Link();

    })
  
    it("Add specific items to basket", () => {
       /* globalThis.data.productName.forEach(function(element) { //Vamos a ir .json de products y vamos a iterar por todos los elementos
            cy.addProductToBasket(element) //Ya hacemos llamada al commands con dichos elementos.
        })
        cy.get('.dropdown-toggle >.fa').click() //.fa para diferenciar entre otros botones .dropdown-toggle*/
        autoStore_HairCare.addHairCareProductToBasket();


    });
  
  });