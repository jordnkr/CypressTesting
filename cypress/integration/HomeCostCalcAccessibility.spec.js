const A11Y_OPTIONS = {
    runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa']
    }
}

describe('Cash to close Accessibility', function() {
    it('Passes accessibility tests', function() {
        cy.visit('https://jordnkr.github.io/homeCostCalculator/cashToCloseCalculator.html')
        cy.injectAxe()
        cy.checkA11y()
    })
})

describe('Expected payments Accessibility', function() {
    it('Passes accessibility tests', function() {
        cy.visit('https://jordnkr.github.io/homeCostCalculator/expectedPaymentsCalculator.html')
        cy.injectAxe()
        cy.checkA11y()
    })
})