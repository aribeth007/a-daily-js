const myComplexVariable1 = Cypress.env('MyComplexVariable1')
const myComplexVariable2 = Cypress.env('MyComplexVariable2')

describe('My Spec 2', function () {
    before(() => {
        cy.log('Before in spec 2')
    })

    beforeEach(() => {
        cy.log('Before each in spec 2')
    })

    it('Does not do much spec 2!', () => {
        cy.log('Inside spec 2!')
        cy.log('Here is my complex variable1 in 2', myComplexVariable1)
        cy.log('Here is my complex variable2 in 2', myComplexVariable2)
        expect(true).to.equal(true)
    })
})