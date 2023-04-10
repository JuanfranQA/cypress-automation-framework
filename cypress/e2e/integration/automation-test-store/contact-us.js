/// <reference types="cypress" />
/// <reference types="@cypress/xpath" /> 


describe("Test Contact Us form via Automation Test Store", ()=>{
    before(function(){
        //cy.viewport(550, 750) //Controle el tamaño y la orientación de la pantalla para su aplicación.
        cy.fixture("userDetails").as("user") //Utilizando un ALias.
    })

    it("Should be able to submit a successful submission via contact us form", ()=>{
        cy.visit("https://www.automationteststore.com")
        

        //cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get("a[href$='contact']").click().then(function(linkText){ //Si pulsamos botón derecho y "Selector actions" podemos tener el selector rápido.
            cy.log("Clicked on link using text: " + linkText.text())
        })
        //cy.xpath("//a[contains(@href, 'contact')]").click()

        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })
        
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk ")

        //cy.get('.col-md-6 > .btn').click()
        cy.get("button[title='Submit']").click() // Selector --> mejor forma.
        
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')

        cy.log("Test completed!")

    });

})