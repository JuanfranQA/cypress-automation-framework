/// <reference types="Cypress" />
 
describe("Verify autocomplate dropdown lists via webdriveruni", ()=>{
    it("Select specific product", ()=>{
    
        cy.visit("/")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        cy.get('#myInput').type('A') //Poner A en el campo de texto
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => { //Iteramos por todos los elementos del desplegable.
            const prod = $el.text()
            const productToSelect = 'Apple'

            if(prod == productToSelect){
                //$el.click(); //Seleccionamos la opcion en el desplegable
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)

            }
        }).then(() => { //Realizar la prueba sin tener que hacer otro caso de pruebas.
            cy.get('#myInput').type('G') //Poner G en el campo de texto
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => { //Iteramos por todos los elementos del desplegable.
            const prod = $el.text()
            const productToSelect = 'Grapes'

            if(prod == productToSelect){
               // $el.click(); //Seleccionamos la opcion en el desplegable
                $el.trigger('click')
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)

            }
        })
    })
    /* *** PARA ESTE CASO, HARÍA UN CASO DE PRUEBAS POR CADA LETRA, ES DECIR, CON LA A Y PONDRÍA TODAS LAS OPCIONES
    Y LUEGO CON OTRA LETRA DISTINTA OTRO CASO DE PRUEBA.*** */

});

    /*it.only("Challenge", ()=>{
    
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        cy.get('#myInput').type('G') //Poner G en el campo de texto
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => { //Iteramos por todos los elementos del desplegable.
            const prod = $el.text()
            const productToSelect = 'Grapes'

            if(prod == productToSelect){
                $el.click(); //Seleccionamos la opcion en el desplegable
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)

            }
        })

    });*/


})