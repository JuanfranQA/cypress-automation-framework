/// <reference types="Cypress" />

describe("Handling data via webdriveruni", () => {
      it("Calculate and assert the total age of all users", () => {

        cy.visit("/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
        
        var userDetails = []
        let num = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => { //Itero por todos los elementos de la tabla
            userDetails[index] = $el.text();
        }).then(() => {
            var i;
            for(i = 0; i < userDetails.length; i++){
                if(Number(userDetails[i])){ //Si la celda contiene un numero, entra en la condición y se suma
                    num += Number(userDetails[i])
                }
                 //solo vamos a coger los elementos de tipo numero de la tabla
                //cy.log(userDetails[i]); //muestra todo las "celdas" de la tabla por filas
            }
            cy.log('Foundo total age ' + num)
            expect(num).to.eq(322) //Resultado esperado
        })
      });

      it("Calculate and assert the age of a given user based on last name", () =>{
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => { //Coge los hijos de la segunda columna que son los last name(Cogemos los apellidos de la columna)
            const text = $el.text()
            if(text.includes("Woods")){
                    cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age){ // NEXT --> hace que me de el numero de la edad.
                        const userAge = age.text();
                        expect(userAge).to.equal("80")
                    })
            }

        })
      })
});  