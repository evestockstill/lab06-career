const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
it('it returns plain text hi', () => {
  return request(app)
  .get('/')
  .then(res => {
    expect(res.text).toEqual('hi')
  })
});

it('it has html <h1>red</h1>', () => {
  return request(app)
  .get('./red')
  .then(res => {
    expect(res.html).toBe('<h1>red</h1>')
  })
})
});
