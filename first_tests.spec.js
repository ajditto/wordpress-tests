describe('Profile Tests', () => {

    before(function () {
        cy.visit('https://www.wordpress.com');

        // this doesn't exist, and need to come later
        // cy.login_magic()

        cy.visit('https://wordpress.com/me')

    })

    it('Updates the user name', () => {
        cy.get('.profile main')
            .within(() => {
                cy.get('[id="first_name"]')
                    .focus()
                    .type('Gary');

                cy.get('[id="last_name"]')
                    .focus()
                    .type('Gygax');

                cy.get('button')
                    .should('be.active')
                    .click();

                cy.get('[id="first_name"]')
                    .should('have.value', 'Gary');

                cy.get('[id="last_name"]')
                    .should('have.value', 'Gygax');
            });
    });

    it('Changes Display Name', () => {
        cy.get('[id="display_name"]')
            .focus()
            .type('Walter White');

        cy.get('button')
            .should('be.active')
            .click();
    });

    it('Checks Gravatar link', () => {
        cy.contains('Gravatar.com')
            .click()

        //This will stop working from here because Cypress doesn't allow you to change home domains.
    });

    after(function () {
        cy.get('button')
            .contains('Log out')
            .click()

        cy.get('[title="Log in"]')
            .should('be.visible')
    });
});