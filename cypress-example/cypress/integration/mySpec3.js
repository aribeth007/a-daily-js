const myComplexVariable1 = Cypress.env('MyComplexVariable1')
const myVariableFromCypressJson = Cypress.env('MY_ENV_VAR_FROM_CYPRESS_JSON')

describe('My Spec 3', function () {
    it('Does not do much spec 3!', () => {
        cy.log('Inside spec 3!')
        cy.log('Here is my complex variable1 in 3', myComplexVariable1)
        cy.log('Here is my env variable from cypress.json', myVariableFromCypressJson)
        expect(true).to.equal(true)
    })
})