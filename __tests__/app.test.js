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
});

describe('post echo', () => {
it('gives status response 200 and plain text', () => {
  return request(app)
  .post('/echo')
  .send('did it')
  .then(res => {
    expect(res.text).toEqual('did it')
    })
  });
});

describe('colors', () => {
it('it has html <h1>red</h1>', () => {
  return request(app)
  .get('/red')
  .then(res => {
    expect(res.text).toEqual('<h1>red</h1>')
  })
  });
});
describe('colors green', () => {
it('it has html <h1>green</h1>', () => {
  return request(app)
  .get('/green')
  .then(res => {
    expect(res.text).toEqual('<h1>green</h1>')
  })
  });
});
describe('colors blue', () => {
it('it has html <h1>blue</h1>', () => {
  return request(app)
  .get('/blue')
  .then(res => {
    expect(res.text).toEqual('<h1>blue</h1>')
  })
  });
});
