describe('API Test of the Harry Potter API', () => {
    it('GET - read', () => {
        cy.request('GET', 'https://www.potterapi.com/v1/sortingHat').then((response)=> {
            expect(response).to.have.property('status',200)
        })
    })
})

