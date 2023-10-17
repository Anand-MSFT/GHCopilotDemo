const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);
chai.should();

describe('API', function() {
    //test the add request
    describe('/add', function() {
        it('should add two numbers', function(done) {
          //actual Test Content in here
          chai.request(server)
                .get('/add')
                .query({a: 2, b: 3})
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.text.should.equal('5');
                    done();
                });
        });

        it('should return 500 if a is not a number', function(done) {
            chai.request(server)
                .get('/add')
                .query({a: 'a', b: 3})
                .end(function(err, res) {
                    res.should.have.status(500);
                    res.text.should.equal('Invalid input');
                    done();
                });
        });

        it('should return an error if a parameter is missing', function(done) {
            chai.request(server)
                .get('/add')
                .query({a: 2})
                .end(function(err, res) {
                    res.should.have.status(500);
                    res.text.should.equal('Invalid input');
                    done();
                });
        });

    });

    //test the subtract request
    describe('/subtract', function() {
        it('should subtract two numbers', function(done) {
            chai.request(server)
                .get('/subtract')
                .query({a: 5, b: 3})
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.text.should.equal('2');
                    done();
                });
        });

        it('should return an error if a parameter is missing', function(done) {
            chai.request(server)
                .get('/subtract')
                .query({a: 5})
                .end(function(err, res) {
                    res.should.have.status(500);
                    res.text.should.equal('Invalid input');
                    done();
                });
        });
    });

    //test the multiply request
    describe('/multiply', function() {
        it('should multiply two numbers', function(done) {
            chai.request(server)
                .get('/multiply')
                .query({a: 2, b: 3})
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.text.should.equal('6');
                    done();
                });
        });

        it('should return an error if a parameter is missing', function(done) {
            chai.request(server)
                .get('/multiply')
                .query({a: 2})
                .end(function(err, res) {
                    res.should.have.status(500);
                    res.text.should.equal('Invalid input');
                    done();
                });
        });
    });

    //test the divide request
    describe('/divide', function() {
        it('should divide two numbers', function(done) {
            chai.request(server)
                .get('/divide')
                .query({a: 6, b: 3})
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.text.should.equal('2');
                    done();
                });
        });

        it('should return an error if dividing by zero', function(done) {
            chai.request(server)
                .get('/divide')
                .query({a: 6, b: 0})
                .end(function(err, res) {
                    res.should.have.status(500);
                    res.text.should.equal('Cannot divide by zero');
                    done();
                });
        });

        it('should return an error if a parameter is missing', function(done) {
            chai.request(server)
                .get('/divide')
                .query({a: 6})
                .end(function(err, res) {
                    res.should.have.status(500);
                    res.text.should.equal('Invalid input');
                    done();
                });
        });
    });
});