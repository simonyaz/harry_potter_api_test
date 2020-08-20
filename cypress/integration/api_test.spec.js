describe('API Test of the Harry Potter API', () => {

    it('Returns a random Hogwarts House', () => {
        cy.request(
        {
            method: 'GET',
            url: 'sortingHat'
        }).then((response)=> {
            expect(response).to.have.property('status',200)
            expect(response.body).to.not.be.null
        })
    })

    

    it('Returns all characters', () => {
       
        cy.request(
        {
            method: 'GET',
            url: 'characters',
            failOnStatusCode: false,
          //  APIkey:'$2a$10$6q0t4VjTZh9Gqy7C6vhxluy4irLNKTMEByFdVgKpjeJrkotk1I22O',
            
            
           // headers:
          //  {
          //      'key': '$2a$10$6q0t4VjTZh9Gqy7C6vhxluy4irLNKTMEByFdVgKpjeJrkotk1I22O'
                //'Content-Type': 'text/plain'
          //  }
        }).then((response) => {
             expect(response.status).to.eq(409)
             expect(response).property('body').to.contain({ 
                error: 'Must pass API key for request',})
        })


    })
})

