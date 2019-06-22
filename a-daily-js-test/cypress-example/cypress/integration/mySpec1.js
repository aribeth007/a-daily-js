import MyUtil from '../support/MyUtil'

describe('My Spec 1', function () {
    before(() => {
        cy.log('Before in spec 1')
        Cypress.env('MyComplexVariable1', 'this_is_complex')
        Cypress.env('MyComplexVariable2', Promise.resolve(MyUtil.doSomething()))
    })

    beforeEach(() => {
        cy.log('Before each in spec 1')
    })

    it('Does not do much spec 1!', () => {
        cy.log('Inside spec 1.1!')
        expect(true).to.equal(true)
    })

    it('Does do much spec 1!', () => {
        cy.log('Inside spec 1.2!')
        cy.log('Here is my complex variable1 in 1.2', Cypress.env('MyComplexVariable1'))
        cy.log('Here is my complex variable2 in 1.2', Cypress.env('MyComplexVariable2'))
        expect(true).to.equal(true)
    })

    it('Does a request!', () => {
        cy.log('Inside spec 1.3!')
        cy.request('https://example.cypress.io').then(response => {
            expect(response.status).to.equal(200)
        })
    })
})