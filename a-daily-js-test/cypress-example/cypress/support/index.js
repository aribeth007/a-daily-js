import './commands'
import MyUtil from './MyUtil'

// I thought the below code will run once before all tests and will set some variables for all, but it doesn't
// Variables defined here cannot be read using Cypress.env('MyComplexVariable1') inside the actual specs. Not sure why.
// before(() => {
//     cy.log('ONE TIME Before ALL!')
    
//     // sets a enviroment variable that will be available in all tests
//     Cypress.env('MyComplexVariable1', 'this_is_complex')
//     Cypress.env('MyComplexVariable2', Promise.resolve(MyUtil.doSomething()))

//     cy.log('Here is my complex variable 1', Cypress.env('MyComplexVariable1'))
//     cy.log('Here is my complex variable 2', Cypress.env('MyComplexVariable2'))
// })

// Also I noticed before runs once before the first spec if added in here and after runs once after the first spec if added in here.
// I would have expected it to run once after all tests
// after(() => {
//     cy.log('ONE TIME AFTER ALL!')
// })