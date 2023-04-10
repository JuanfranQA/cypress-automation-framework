/// <reference types="cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com")
        /*const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup") //la dirección que ponemos en href no indica 
                                                    //que se encuentra en la barra de menu, luego con un contains buscamos el deseado
                                                    //Por eso la *, decimos que contenga, no hace falta poner la url entera.
        makeupLink.click() //Hay que ponerlo despues, y lo al final. da ERROR

        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        skincareLink.click()*/

        /*Forma incorrecta
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup") 
        const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")

        skincareLink.click()
        makeupLink.click()*/

        //Forma recomendada
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
    });

    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com")
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        //FAIL
        //const header = cy.get("h1 .maintext")
        //cy.log(header.text())

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq("Makeup") //Resultado obtenido(a traves de headerText) igual al resulado esperado
        })

    });

    it.only("Validate properties of the Contact US pages", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        // Uses cypress command and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
        //--> id, nombre

        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name') // en este caso no podemos poner is.eq por que no tenemos los : puestos por tanto 
                                                            //no sería igual y empleamos contain

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })
        
    });
})




