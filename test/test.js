// Import the dependencies for testing
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../src/app.js'

// Configure chai
chai.use(chaiHttp)
chai.should()

describe('API test', () => {
  describe('GET /files/list', () => {
    // Test to get all students record
    it('should get all files names', (done) => {
      chai
        .request(app)
        .get('/files/list')
        .end((err, res) => {
          if (err) done(err)
          res.should.have.status(200)
          res.body.should.be.an('array')
          done()
        })
    })
  })

  describe('GET /files/data', () => {
    it('should get a single file', (done) => {
      const id = 2
      chai
        .request(app)
        .get(`/files/data/${id}`)
        .end((err, res) => {
          if (err) done(err)
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })

    it('should not get a single file', (done) => {
      const id = 1000000
      chai
        .request(app)
        .get(`/files/data/${id}`)
        .end((err, res) => {
          if (err) done(err)
          res.should.have.status(404)
          done()
        })
    })

    it('should get processing data', (done) => {
      chai
        .request(app)
        .get('/files/data')
        .end((err, res) => {
          if (err) done(err)
          res.should.have.status(200)
          res.body.should.be.an('array')
          done()
        })
    })
  })
})
