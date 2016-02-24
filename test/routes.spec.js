var supertest = require('supertest');
var app = require('../app');
var agent = supertest.agent(app);

// describe('main user routes', function() {
//   xit('lists all users', function() {
//
//   });
//
//   xit('lists user by id', function() {
//
//   });
//
//
// });
//
// describe('wiki routes', function() {
//   xit('lists all pages in wiki routes', function () {
//
//   });
//
//   xit('if n')
// });


describe('http requests', function() {

  describe('GET /', function() {
    it('gets 200', function(done) {
      agent
        .get('/')
        .expect(200, done);
    });
  });

  describe('GET /wiki/add', function() {
    it('gets 200', function(done) {
      agent
        .get('/wiki/add')
        .expect(200, done);
    });
  });

  describe('GET /wiki/:urlTitle', function() {
    it('gets 404 on page that doesnt exist', function(done) {
      agent
        .get('/wiki/Nada')
        .expect(404, done);
    });
    it('gets 200 on page that does exist', function(done) {
      agent.get('/wiki/testasd')
        .expect(200, done);
    });
  });

  describe('GET /wiki/search', function() {
    it('gets 200', function(done) {
      agent
        .get('/wiki/search')
        .expect(200, done);
    });
  });

  describe('GET /wiki/:urlTitle/similar', function() {
    it('gets 404 for page that doesn\'t exist', function(done) {
      agent
        .get('/wiki/This_is_NOT_editable_page_MAYBE_YES/similar')
        .expect(404, done);
    });
    it('gets 200 for similar page', function(done) {
      agent
        .get('/wiki/testasd/similar')
        .expect(200, done);
    });
  });


  describe('GET /wiki/add', function() {
    it('gets 200', function(done) {
      agent
        .get('/wiki/add')
        .expect(200, done);
    });
  });


  describe('POST /wiki/add', function() {
    it('creates a page in db', function(done) {
      agent
        .post('/wiki/')
        .send({
          title: 'Some new title',
          content: 'What did we do?',
          name: 'John',
          tags: 'super awesome',
          email: '1me@me.com'
        })
        .end(function() {
          agent
            .get('/wiki/Some_new_title')
            .expect(200, done);
        });
        // .get('/wiki/Some_new_title')
        // .expect(200, done);
    });
  });

});
