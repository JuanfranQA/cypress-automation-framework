/// <reference types="cypress" />

/*EACH --> iterar a través de una estructura similar a una matriz (matrices u objetos con una propiedad de longitud). 
No es seguro encadenar más comandos que dependan del asunto después de .each().*/

//WRAP --> Entrega el objeto pasado a .wrap(). Si el objeto es una promesa, entrega su valor resuelto. 

describe("Iterate over elements", () => {
  beforeEach(function() {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  })

  it("Log information of all hair care products", () => {
    
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        cy.log("Index: " + index + " : " + $el.text())
    });
  });

  it("Add specific product to basket", () => {
   
   /* cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text().includes('Curls to straight Shampoo')) {
            cy.wrap($el).click()
        }
    });*/
    cy.selectProduct('Curls to straight Shampoo');
  });

  it("Add nother specific product to basket", () => {
    
    cy.selectProduct('Skinsheen Bronzer Stick');
  });

  it("Add nother specific product to basket 2", () => {
    
    cy.selectProduct('Pantene Pro-V Conditioner, Classic Care');
  });
});

