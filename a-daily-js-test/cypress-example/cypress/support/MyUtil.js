class MyUtil {

    /**
     * Simulates doing something
     */
    static doSomething() {
        return new Promise(resolve => resolve('My beautiful result!'))
    }

    /**
     * Simulates  setting  an env variable
     * see mySpec3 and  mySpec2 for example  of usage
     */
    static setImportantEnvVariable() {
        if (Cypress.env('IMPORTANT_VAR')) {
            cy.log('Important variable  already set by another test')
            return 
        }
        Cypress.env('IMPORTANT_VAR', 'IMPORTANT_VAR_VALUE')
    }
}

export default MyUtil