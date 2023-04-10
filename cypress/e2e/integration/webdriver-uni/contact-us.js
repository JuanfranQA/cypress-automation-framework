import HomePage_PO from "../../../support/pageObjects/webdriver-uni/HomePage_PO";
import Contact_Us_PO from "../../../support/pageObjects/webdriver-uni/Contact_Us_PO";

/// <reference types="Cypress" />

describe("Test Contact Us form via WebDriverUni", ()=>{
    Cypress.config('defaultCommandTimeout', 20000) //Unicamente cambiamos el timeout de esta prueba
    const homepage_PO = new HomePage_PO();
    const contact_Us_PO = new Contact_Us_PO();

    before(function(){
        cy.fixture('example').then(function(data){
            //this.data = data;
            globalThis.data = data;
        })
    
    })

    beforeEach(() => {
        //Al crear la page Object no hará falta este paso. Solo con el import
        //cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html") //Nos ahorramos el tener que pinchar en algun objeto
        homepage_PO.visitHomePage();

        cy.wait(3000) // WAIT --> Espere una cantidad de milisegundos o espere a que se resuelva un recurso con alias antes de pasar al siguiente comando.

        homepage_PO.clickOn_ContactUs_Button();
        //cy.pause(); //Pausa despues de las anteriores acciones
    })

    it("Should be able to submit a successful submission via contact us form", ()=>{
    
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us') //include --> ver si en el titulo incluye la palabra deseada.
        cy.url().should('include', 'contactus') // include --> comprobar si en la url contiene una palabra
        //cy.get('#contact-us').click()
        /*cy.get('[name="first_name"]').type(data.first_name) // get --> en el apartado me introduce el nombre de "Juanfran"
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click({force:true});
        cy.get('h1').should('have.text', 'Thank You for your Message!')*/ //Assertion --> Tienen un texto ... para verifcar el "resultado esperado"

        //cy.contactForm(Cypress.env("first_name"), data.last_name, data.email, "How can I learn Cypress?", 'h1', 'Thank You for your Message!')

        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, 
            "How can I learn Cypress?", "h1", "Thank You for your Message!");
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", ()=>{
        
        /*cy.get('[name="first_name"]').type("Pepe")
        cy.get('[name="last_name"]').type("Laínez Valle")
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')*///Contains --> dentro un un texto grande o varias lineas para saber si contiene una palabra o frase.
        //cy.contactForm(data.first_name, data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address')
        
        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address');

    });

})



