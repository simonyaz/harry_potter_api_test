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

    
    //Wihout passing a api key
    it('Should returns all characters, error - without authentication', () => {
       
        cy.request(
        {
            method: 'GET',
            url: 'characters',
            failOnStatusCode: false,          
        }).then((response) => {
             expect(response.status).to.eq(409)
             expect(response).property('body').to.contain({ 
                error: 'Must pass API key for request',})
        })
    })

     //Passing a api key
     it('Returns all characters, success authentication', () => { 
       
        cy.request(
        {
            method: 'GET',
            url: 'characters?key=$2a$10$6q0t4VjTZh9Gqy7C6vhxluy4irLNKTMEByFdVgKpjeJrkotk1I22O',        
        }).as('getCharacters')
        .then((response) => {

            
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(195)
          //  expect(response.body).has.property('name', 'Hermione Granger');             
                
        })
    })
})

