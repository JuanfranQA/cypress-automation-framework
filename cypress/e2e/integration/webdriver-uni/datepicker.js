/// <reference types="Cypress" />

describe("Test Datepicker via webdriveruni", ()=>{
    it("Select date from the datepiker", ()=>{
    
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("/")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})
        cy.get('#datepicker').click()

       /* let date = new Date();
        date.setDate(date.getDate()) //Nos da el día actual.
        cy.log(date.getDate())

        let date2 = new Date();
        date2.setDate(date.getDate() + 5) //Sumamos 5 al dia actual
        cy.log(date2.getDate()) */

        var date = new Date(); //En este ejemplo, vamos a tener como sacar el año, mes y dia(+1) ACTUAL
        date.setDate(date.getDate() + 260)
        var futureYear = date.getFullYear()
        var futureMonth = date.toLocaleString("en-US", {month: "long"}) //Tenemos que tener en cuenta el calendario ingles o español
        var futureDay = date.getDate()

        cy.log("Future year to select: " + futureYear)
        cy.log("Future month to select: " + futureMonth) 
        cy.log("Future day to select: " + futureDay)

        function selectMonthAndYear(){ //Seleccionar un día que no se encuentra en el calendario inicial, y hacer que aparezca en pantalla.
            //Para ello, primero debemos irnos al calendario y al mes y año que aparecen. Luego miramos si el año que hemos puesto se encuentra por pantalla, si no, pulsa las flechitas.
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)){
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click()
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay (){
            cy.get('[class = "day"]').contains(futureDay).click(); //Seleccionar un dia en el calendario.
        }

        selectMonthAndYear();
        selectFutureDay();
        
    });

})
