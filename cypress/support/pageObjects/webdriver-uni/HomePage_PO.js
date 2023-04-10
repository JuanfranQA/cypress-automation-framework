class HomePage_PO {
    visitHomePage() {
        cy.visit("/", {timeout: 60000}); //Cyprees.env("webdriveruni_homepage")
        //Si la página no carga en 60 segundos, el test devolverá un FAIL
    }

    clickOn_ContactUs_Button(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true}, {timeout: 8000}) //Cuando pinchas tiene que durar 8s, si no FAIL
    }
}
export default HomePage_PO;