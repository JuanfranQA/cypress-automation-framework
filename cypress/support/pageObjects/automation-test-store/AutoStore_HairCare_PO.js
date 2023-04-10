class AutoStore_HairCare_PO {
    addHairCareProductToBasket() { //Nombre de la función
        globalThis.data.productName.forEach(function (element) { //Vamos a ir .json de products y vamos a iterar por todos los elementos
            cy.addProductToBasket(element).then(() => {
                //debugger
            }) //Ya hacemos llamada al commands con dichos elementos.
        })
        cy.get('.dropdown-toggle >.fa').click().debug(); //.fa para diferenciar entre otros botones .dropdown-toggle
    }
}
export default AutoStore_HairCare_PO;