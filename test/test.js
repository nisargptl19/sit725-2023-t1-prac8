let expect = require('chai').expect;
let request = require('request');
let url = 'http://localhost:3001/api/characters';
let characters = {
    name:'Character name',
    link:'Character link',
    detail:'Character details',
}

describe('Get all character testing', function() {
    it('return status code of 200', function(done){
        request(url, function(error,response,body){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('return succesfull message', function(done){
        request(url, function(error,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('Destinations');
            done();
        });
    });

    it('returns an array', function(done){
        request(url, function(error,response,body){
            body = JSON.parse(body);
            expect(body.data).to.be.a('array');
            done();
        });
    });
});

describe('Add new charater test case', function() {
    it('insert a character to database', function(done){
        request.post({url:url, form:characters}, function(error,response,body){
            body = JSON.parse(body);
            expect(body.message).to.contain('Joined');
            done();
        });
    });
});
