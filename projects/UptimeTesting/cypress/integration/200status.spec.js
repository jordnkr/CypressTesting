context('200 OK Status Tests', () => {
    Object.keys(Cypress.env('urls')).forEach((url) => {
        it ('Testing for 200 OK response: ' + url, () => {
            cy.request(Cypress.env('urls')[url])
            .then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })
})
