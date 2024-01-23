describe('HTTP Requests', () => {

    it('Get Call', () => {
        
        cy.request('Get', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200);
    });

   it('Post Call', () => {
    cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: {
            title: "Test post",
            body: "This is post call",
            userId: 1
        }
    })
    // .then((response) => {
    //     // Additional assertions on the response
    //     expect(response.status).to.equal(201);
    //     expect(response.body).to.have.property('title', 'Test post');
    //     expect(response.body).to.have.property('body', 'This is post call');
    //     expect(response.body).to.have.property('userId', 1);
    // });
});


    it('Putt Call', () => {

        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body:{
                title:"Test post - Updated",
                body:"This is put call",
                id:1
            }
        })
        .its('status')
        .should('equal',200);
        
    });

    it('Delete Call', () => {
        
        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1'
        })
        .its('status')
        .should('equal',200);
    });
    
});