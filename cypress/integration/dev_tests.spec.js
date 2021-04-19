


describe('Making Pizza Form', () => {

    const pineappleBox = () => cy.get('#pineapple')
    const pepperoniBox = () => cy.get('#pepperoni')

    it('Name Input', () => {
        cy.visit("http://localhost:3000/Form")
        cy.get('form input:first').type('testing.......')
        cy.get('form input:first').should('have.value', 'testing.......')
    })

    it('allows user to select multiple toppings', () => {

        pineappleBox().click()
        pepperoniBox().click()
    })
    
    it('Ability To Submit Form', () => {
        cy.visit("http://localhost:3000/Form")
        cy.get('form input:first').type('John Doe')
        cy.contains('Place').click()
        
    })
}) 