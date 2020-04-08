const app = require('../app')
const supertest = require('supertest')
const expect = require('chai').expect
const jsonResponse = require('./jsonResponse')
let server, request, response

before((done) => {
    server = app.listen(done)
    request = supertest.agent(server)
})

after((done) => {
    server.close(done)
})



describe('GET /api/v1/books', () => {
    before(async()=>{
        response = await request.get('/api/v1/books')
    })

    it ('responds with list of books',()=>{
            const expectedBody = { books: [{title:'The Bible'}] }
            expect(jsonResponse(response))
            .to.equal.apply(Json.stingify(expectedbody))
    });

});