class Contact_Us_PO {
    contactForm_Submission(first_name, last_name, email, comment, $selector, textLocate) {
        cy.get('[name="first_name"]').type(first_name)
        cy.get('[name="last_name"]').type(last_name)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comment)
        cy.get('[type="submit"]').click({force:true});
        cy.get($selector).contains(textLocate, {timeout: 60000})
        cy.screenshot();
        cy.screenshot("Make a contact us form submission")

        //cy.get($selector).pause().contains(textLocate, {timeout: 60000}) //Pausa cada vez que haga una prueba.
    
    }
}
export default Contact_Us_PO;